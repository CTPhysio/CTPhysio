import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

// Reuse the actual React components rather than manually copying homepage text.
// The existing client app takes over when JavaScript loads.
const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});
try {
  const names = ['Hero', 'WhoWeHelp', 'TeamIntro', 'HowWeHelp', 'HowCanWeHelp', 'FAQ', 'FinalCTA'];
  const components = [];
  for (const name of names) {
    const mod = await server.ssrLoadModule('/src/components/' + name + '.tsx');
    components.push(React.createElement(mod.default, { key: name }));
  }
  const snapshot = renderToStaticMarkup(
    React.createElement(MemoryRouter, { initialEntries: ['/'] },
      React.createElement('div', { 'data-homepage-prerender': 'true' }, components))
  );
  if (!snapshot.includes('Physiotherapy in Harborne, Birmingham')) {
    throw new Error('Homepage heading missing from generated HTML');
  }
  const file = 'dist/index.html';
  const html = await readFile(file, 'utf8');
  if (!html.includes('<div id="root"></div>')) throw new Error('React root not found');
  const canonical = '<link rel="canonical" href="https://christileyphysiotherapy.com/">';
  if (!html.includes('<meta name="description"') || !html.includes('<meta property="og:url"')) {
    throw new Error('Homepage metadata missing');
  }
  const withCanonical = html.replace('</head>', canonical + '\n</head>');
  await writeFile(file, withCanonical.replace('<div id="root"></div>', '<div id="root">' + snapshot + '</div>'));
  console.log('Homepage HTML generated from React components');
} finally {
  await server.close();
}
