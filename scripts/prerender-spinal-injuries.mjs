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
  const mod = await server.ssrLoadModule('/src/components/SpinalInjuries.tsx');
  const snapshot = renderToStaticMarkup(
    React.createElement(MemoryRouter, { initialEntries: ['/treatments/spinal-injuries'] },
      React.createElement(mod.default))
  );
  for (const required of ['Spinal Injury Rehabilitation in Harborne, Birmingham | Chris Tiley', 'Spinal Injury Rehabilitation in Harborne', 'Frequently Asked Questions', 'Book an Appointment']) {
    if (!snapshot.includes(required)) throw new Error('SpinalInjuries snapshot missing: ' + required);
  }

  const path = '/treatments/spinal-injuries';
  const url = 'https://christileyphysiotherapy.com' + path;
  const title = 'Spinal Injury Rehabilitation in Harborne, Birmingham | Chris Tiley';
  const description = 'Physiotherapy for appropriate spinal injury rehabilitation in Harborne, Birmingham, with individual assessment, graded movement and strength work.';
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
    throw new Error('SpinalInjuries pre-render missing built CSS or JS: ' + JSON.stringify(assetTags));
  }
  html = html.replace('</head>', styles.join('\n') + '\n</head>');
  html = html.replace('<script type="module" src="/src/main.tsx"></script>', scripts.join('\n'));
  if (!html.includes(styles[0]) || !html.includes(scripts[0])) {
    throw new Error('SpinalInjuries asset injection failed');
  }
  await mkdir('dist/treatments/spinal-injuries', { recursive: true });
  await writeFile('dist/treatments/spinal-injuries/index.html', html);
  console.log('SpinalInjuries HTML generated from React component');
} finally {
  await server.close();
}
