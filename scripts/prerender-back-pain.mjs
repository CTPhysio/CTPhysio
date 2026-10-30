import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

// Render the real treatment component so crawlers receive its content before JS runs.
const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});
try {
  const mod = await server.ssrLoadModule('/src/components/BackPain.tsx');
  const snapshot = renderToStaticMarkup(
    React.createElement(MemoryRouter, { initialEntries: ['/treatments/back-pain'] },
      React.createElement(mod.default))
  );
  for (const required of ['Lower Back Pain Physiotherapy in Harborne, Birmingham', 'Frequently Asked Questions', 'Book an Appointment']) {
    if (!snapshot.includes(required)) throw new Error('Back pain snapshot missing: ' + required);
  }

  const path = '/treatments/back-pain';
  const url = 'https://christileyphysiotherapy.com' + path;
  const title = 'Lower Back Pain Physiotherapy in Harborne, Birmingham | Chris Tiley';
  const description = 'Lower back pain physiotherapy in Harborne, Birmingham. Understand your symptoms, build strength and confidence, and get back to the activities you enjoy.';
  const escape = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  let html = await readFile('index.html', 'utf8');
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
  if (!html.includes('<div id="root"></div>')) throw new Error('React root not found');
  html = html.replace('<div id="root"></div>', '<div id="root">' + snapshot + '</div>');
  const built = await readFile('dist/index.html', 'utf8');
  const assetTags = [...built.matchAll(/<(?:script|link)\b[^>]*(?:\/assets\/)[^>]*>/g)].map(m => m[0]);
  if (!assetTags.some(tag => tag.includes('<script'))) throw new Error('Built JS asset not found');
  html = html.replace('<script type="module" src="/src/main.tsx"></script>', assetTags.join('\n'));
  await mkdir('dist/treatments/back-pain', { recursive: true });
  await writeFile('dist/treatments/back-pain/index.html', html);
  console.log('Back pain HTML generated from React component');
} finally {
  await server.close();
}
