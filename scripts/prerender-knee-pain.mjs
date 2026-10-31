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
  const mod = await server.ssrLoadModule('/src/components/KneePain.tsx');
  const snapshot = renderToStaticMarkup(
    React.createElement(MemoryRouter, { initialEntries: ['/treatments/knee-pain'] },
      React.createElement(mod.default))
  );
  for (const required of ['Knee Pain Physiotherapy in Harborne, Birmingham', 'Move with Confidence Again', 'Frequently Asked Questions', 'Book an Appointment']) {
    if (!snapshot.includes(required)) throw new Error('Knee pain snapshot missing: ' + required);
  }

  const path = '/treatments/knee-pain';
  const url = 'https://christileyphysiotherapy.com' + path;
  const title = 'Knee Pain Physiotherapy in Harborne, Birmingham | Chris Tiley';
  const description = 'Knee pain physiotherapy in Harborne, Birmingham. Support for knee arthritis, injuries and rehabilitation to help you move with strength and confidence.';
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
  // Put stylesheet links in <head> and the Vite entry script in <body>.
  // Keep CSS loading independent of whether React hydrates successfully.
  const assetTags = [...built.matchAll(/<(?:script|link)\b[^>]*>/g)]
    .map(match => match[0])
    .filter(tag => tag.includes('/assets/'));
  const styles = assetTags.filter(tag => /^<link\b/.test(tag) && /\.css(?:["?])/.test(tag));
  const scripts = assetTags.filter(tag => /^<script\b/.test(tag));
  if (!styles.length || !scripts.length) {
    throw new Error('Knee pain pre-render missing built CSS or JS: ' + JSON.stringify(assetTags));
  }
  html = html.replace('</head>', styles.join('\n') + '\n</head>');
  html = html.replace('<script type="module" src="/src/main.tsx"></script>', scripts.join('\n'));
  if (!html.includes(styles[0]) || !html.includes(scripts[0])) {
    throw new Error('Knee pain asset injection failed');
  }
  await mkdir('dist/treatments/knee-pain', { recursive: true });
  await writeFile('dist/treatments/knee-pain/index.html', html);
  console.log('Knee pain HTML generated from React component');
} finally {
  await server.close();
}
