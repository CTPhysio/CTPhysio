import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

// Render existing components without rewriting their content or interactive behaviour.
const pages = [
  { path: '/about', component: 'Team', title: 'Meet Our Physiotherapy Team in Harborne | Chris Tiley Physiotherapy', description: 'Meet Chris, Kate and Jessamyn, our physiotherapy team in Harborne, Birmingham. Learn about our approach to rehabilitation, strength and recovery.', check: 'Helping You Move Better' },
  { path: '/contact', component: 'Contact', title: 'Contact Our Physiotherapy Clinic in Harborne | Chris Tiley Physiotherapy', description: 'Contact Chris Tiley Physiotherapy in Harborne, Birmingham to ask about appointments, physiotherapy and strength classes.', check: 'Contact' },
  { path: '/booking', component: 'Booking', title: 'Book Physiotherapy in Harborne, Birmingham | Chris Tiley Physiotherapy', description: 'Book a physiotherapy appointment at Chris Tiley Physiotherapy in Harborne, Birmingham. Find the right appointment and book online.', check: 'Book' },
  { path: '/strength-rehab-classes', component: 'StrengthRehabClasses', title: 'Strength & Rehab Classes in Harborne, Birmingham | Chris Tiley Physiotherapy', description: 'Small-group strength and rehab classes in Harborne, Birmingham. Build strength with guided, progressive exercise tailored to your ability.', check: 'Strength' }
];
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
try {
  const template = await readFile('index.html', 'utf8');
  const built = await readFile('dist/index.html', 'utf8');
  const assetTags = [...built.matchAll(/<(?:script|link)\b[^>]*>/g)].map(m => m[0]).filter(t => t.includes('/assets/'));
  const styles = assetTags.filter(t => /^<link\b/.test(t) && /\.css(?:["?])/.test(t));
  const scripts = assetTags.filter(t => /^<script\b/.test(t));
  if (!styles.length || !scripts.length) throw new Error('Missing Vite CSS or JS assets');
  const escape = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  for (const page of pages) {
    const mod = await server.ssrLoadModule('/src/components/' + page.component + '.tsx');
    const snapshot = renderToStaticMarkup(React.createElement(MemoryRouter, { initialEntries: [page.path] }, React.createElement(mod.default)));
    if (!snapshot.includes(page.check) || !/<h1\b/.test(snapshot)) throw new Error('Missing page content/H1: ' + page.path);
    const url = 'https://christileyphysiotherapy.com' + page.path;
    let html = template.replace(/<title>[^<]*<\/title>/, '<title>' + escape(page.title) + '</title>');
    for (const [attr, key, value] of [
      ['name', 'description', page.description], ['property', 'og:title', page.title],
      ['property', 'og:description', page.description], ['property', 'og:url', url]
    ]) {
      const tag = '<meta ' + attr + '="' + key + '" content="' + escape(value) + '">';
      const pattern = new RegExp('<meta\\s+' + attr + '="' + key + '"[^>]*>', 'i');
      html = pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', tag + '\n</head>');
    }
    html = html.replace('</head>', '<link rel="canonical" href="' + url + '">\n' + styles.join('\n') + '\n</head>');
    if (!html.includes('<div id="root"></div>')) throw new Error('React root missing');
    html = html.replace('<div id="root"></div>', '<div id="root">' + snapshot + '</div>');
    html = html.replace('<script type="module" src="/src/main.tsx"></script>', scripts.join('\n'));
    const dest = 'dist' + page.path;
    await mkdir(dest, { recursive: true });
    await writeFile(dest + '/index.html', html);
    console.log('Pre-rendered ' + page.path);
  }
} finally {
  await server.close();
}
