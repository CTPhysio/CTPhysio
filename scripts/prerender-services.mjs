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
  for (const required of ['Physiotherapy Services in Harborne, Birmingham', 'Conditions &amp; Rehabilitation', 'Knee Pain']) {
    if (!snapshot.includes(required)) throw new Error('Services snapshot missing: ' + required);
  }

  const path = '/services';
  const url = 'https://christileyphysiotherapy.com' + path;
  const title = 'Physiotherapy Services in Harborne, Birmingham | Chris Tiley';
  const description = 'Physiotherapy, injury rehabilitation and strength training in Harborne, Birmingham. Personalised support to reduce pain, recover and stay active.';
  const escape = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  // Homepage pre-render has already filled dist/index.html's root.
  // Replace that snapshot with the Services snapshot for this route only.
  let html = await readFile('index.html', 'utf8');
  // Use the untouched Vite HTML template, not the homepage snapshot.
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
  if (!html.includes('<div id="root"></div>')) throw new Error('React root not found in template');
  html = html.replace('<div id="root"></div>', '<div id="root">' + snapshot + '</div>');
  // The source template points to TypeScript; copy built JS/CSS asset tags
  // from Vite's generated index to keep the Services page functional.
  const built = await readFile('dist/index.html', 'utf8');
  const assetTags = [...built.matchAll(/<(?:script|link)\b[^>]*(?:\/assets\/)[^>]*>/g)].map(m => m[0]);
  if (!assetTags.some(tag => tag.includes('<script'))) throw new Error('Built JavaScript asset not found');
  html = html.replace('<script type="module" src="/src/main.tsx"></script>', assetTags.join('\n'));
  await mkdir('dist/services', { recursive: true });
  await writeFile('dist/services/index.html', html);
  console.log('Services HTML generated from React component');
} finally {
  await server.close();
}
