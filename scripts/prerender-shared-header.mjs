import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

// Supply the shared banner and navigation in the initial HTML of every
// pre-rendered page. React still replaces the root when it starts in the browser.
const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});
try {
  const banner = (await server.ssrLoadModule('/src/components/TrustpilotBanner.tsx')).default;
  const navbar = (await server.ssrLoadModule('/src/components/Navbar.tsx')).default;
  const footer = (await server.ssrLoadModule('/src/components/Footer.tsx')).default;
  const shell = renderToStaticMarkup(
    React.createElement(MemoryRouter, { initialEntries: ['/'] },
      React.createElement(React.Fragment, null,
        React.createElement(banner),
        React.createElement(navbar)))
  );
  const footerMarkup = renderToStaticMarkup(React.createElement(footer));
  if (!footerMarkup.includes('/privacy-policy/') || !footerMarkup.includes('/terms-of-service/')) {
    throw new Error('Footer legal links missing from generated markup');
  }
  if (!shell.includes('<header') || !shell.includes('Our patients say Excellent')) {
    throw new Error('Shared banner or navigation missing from generated markup');
  }

  let updated = 0;
  async function visit(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const file = join(dir, entry.name);
      if (entry.isDirectory()) { await visit(file); continue; }
      if (!entry.isFile() || !file.endsWith('.html')) continue;
      let html = await readFile(file, 'utf8');
      if (!html.includes('<div id="root">')) continue;
      const hasHeader = html.includes('<header');
      const hasFooter = html.includes('<footer');
      if (hasHeader && hasFooter) continue;
      if (!hasHeader) html = html.replace('<div id="root">', '<div id="root">' + shell);
      if (!hasFooter) {
        const rootEnd = html.lastIndexOf('</div>');
        if (rootEnd < html.indexOf('<div id="root">')) throw new Error('React root closing tag missing: ' + file);
        html = html.slice(0, rootEnd) + footerMarkup + html.slice(rootEnd);
      }
      await writeFile(file, html);
      updated++;
    }
  }
  await visit('dist');
  if (updated < 5) throw new Error('Expected shared navigation on multiple pre-rendered pages; updated ' + updated);
  console.log('Added initial shared banner and navigation to ' + updated + ' pages');
} finally {
  await server.close();
}
