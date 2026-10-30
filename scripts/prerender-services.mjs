import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

// Generate the Services page from its real React component at build time.
// Browser-only Google Reviews are omitted from the snapshot and restored by React.
const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});
try {
  const mod = await server.ssrLoadModule('/src/components/Services.tsx');
  const snapshot = renderToStaticMarkup(
    React.createElement(MemoryRouter, { initialEntries: ['/services'] },
      React.createElement(mod.default, { prerender: true }))
  );
  for (const required of ['Physiotherapy For Your Active Life', 'Common Problems We Help With', 'Knee Pain']) {
    if (!snapshot.includes(required)) throw new Error('Services snapshot missing: ' + required);
  }

  const path = '/services';
  const url = 'https://christileyphysiotherapy.com' + path;
  const title = 'Physiotherapy Services in Harborne | Chris Tiley Physiotherapy';
  const description = 'Explore physiotherapy services in Harborne, Birmingham, including treatment for muscle and joint pain, sports injuries and rehabilitation.';
  const escape = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  // Homepage pre-render has already filled dist/index.html's root.
  // Replace that snapshot with the Services snapshot for this route only.
  let html = await readFile('dist/index.html', 'utf8');
  html = html.replace(/<title>[^<]*<\/title>/, '<title>' + escape(title) + '</title>');
  const tags = [
    ['name', 'description', description],
    ['property', 'og:title', title],
    ['property', 'og:description', description],
    ['property', 'og:url', url],
    ['property', 'og:type', 'website'],
  ];
  for (const [attr, key, value] of tags) {
    const tag = '<meta ' + attr + '="' + key + '" content="' + escape(value) + '">';
    const pattern = new RegExp('<meta\\s+' + attr + '="' + key + '"[^>]*>');
    html = pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', tag + '\n</head>');
  }
  html = html.replace('</head>', '<link rel="canonical" href="' + url + '">\n</head>');
  const rootStart = html.indexOf('<div id="root">');
  const scriptStart = html.indexOf('<script type="module"', rootStart);
  const rootEnd = html.lastIndexOf('</div>', scriptStart);
  if (rootStart < 0 || scriptStart < 0 || rootEnd < rootStart) {
    throw new Error('React root boundaries not found');
  }
  html = html.slice(0, rootStart) + '<div id="root">' + snapshot + html.slice(rootEnd);
  await mkdir('dist/services', { recursive: true });
  await writeFile('dist/services/index.html', html);
  console.log('Services HTML generated from React component');
} finally {
  await server.close();
}
