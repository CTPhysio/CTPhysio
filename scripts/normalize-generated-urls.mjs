import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// Netlify serves these generated directory pages at trailing-slash URLs.
// Align canonical/OG URLs and server-rendered internal links with their final 200 URLs.
const redirected = new Set([
  '/about', '/contact', '/booking', '/strength-rehab-classes',
  '/services', '/treatments/back-pain', '/treatments/shoulder-pain',
  '/treatments/surgical-rehab', '/treatments/knee-pain',
  '/treatments/neck-pain', '/treatments/hip-pain', '/treatments/sciatica',
  '/treatments/balance-falls', '/treatments/deconditioning',
  '/treatments/arthritis', '/treatments/sports-injuries', '/treatments/orthopedic-rehab', '/treatments/runner-triathlete-rehab', '/treatments/overuse-injuries', '/treatments/spinal-injuries', '/over-60s-strength-classes',
  '/strength-training-over-60s', '/advice/injury-prevention-womens-football'
]);
const domain = 'https://christileyphysiotherapy.com';
const finalPath = path => redirected.has(path) ? path + '/' : path;
let changed = 0;
async function visit(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) { await visit(file); continue; }
    if (!entry.isFile() || !file.endsWith('.html')) continue;
    let html = await readFile(file, 'utf8');
    const before = html;
    // Update absolute canonical and social URLs, without touching asset URLs.
    for (const path of redirected) {
      html = html.replaceAll(domain + path + '"', domain + path + '/"');
      html = html.replaceAll('href="' + path + '"', 'href="' + path + '/"');
      html = html.replaceAll('href="' + path + '#', 'href="' + path + '/#');
    }
    // Ensure the canonical tag for each generated directory page is self-referencing.
    const relative = file.replaceAll('\\', '/').replace(/^dist\//, '');
    const pagePath = relative === 'index.html' ? '/' : '/' + relative.replace(/\/index\.html$/, '');
    if (redirected.has(pagePath)) {
      const canonical = domain + finalPath(pagePath);
      const tag = '<link rel="canonical" href="' + canonical + '">';
      html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?\s*>/g, '');
      html = html.replace('</head>', tag + '\n</head>');
      if (!html.includes(tag)) throw new Error('Canonical not generated for ' + file);
    }
    if (html !== before) { await writeFile(file, html); changed++; }
  }
}
await visit('dist');
console.log('Aligned canonical and server-rendered links in ' + changed + ' HTML files');
