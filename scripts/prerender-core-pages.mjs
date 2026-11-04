import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

// Render existing components without rewriting their content or interactive behaviour.
const pages = [
  { path: "/advice/ski-fitness-exercises", component: "SkiFitnessArticle", image: "/assets/images/ski-fitness-older-skier.webp", imageAlt: "Older woman skiing on a snowy alpine slope", imageWidth: "1556", imageHeight: "1011", type: "article", title: "Ski Fitness Exercises: Prepare for Your Holiday", description: "Preparing for a skiing holiday? Discover 7 strength movement patterns to help build ski fitness, manage fatigue and enjoy your time on the slopes.", check: "How to Prepare Your Body for a Skiing Holiday" },
  { path: "/ski-mojo", component: "SkiMojo", image: "/assets/images/ski-mojo-brace.webp", imageAlt: "Ski Mojo wearable leg support worn over ski clothing", imageWidth: "831", imageHeight: "831", type: "website", title: "Ski Mojo Fitting in Birmingham | Chris Tiley Physiotherapy", description: "Ski Mojo fitting in Harborne, Birmingham with physio Chris Tiley. Bring your ski boots for a personalised setup. £594 including fitting; £50 fitting only.", check: "Ski Mojo fitting in Birmingham" },
  { path: "/events", component: "Events", title: "Physiotherapy Events in Harborne | Chris Tiley Physiotherapy", description: "Find information about upcoming events and activities organised by Chris Tiley Physiotherapy in Harborne, Birmingham.", check: "Upcoming Events" },
  { path: "/advice", component: "AdvicePage", title: "Physiotherapy Advice | Chris Tiley Physiotherapy", description: "Practical advice from Chris, Kate and the physiotherapy team to help you stay active, get stronger and manage injuries.", check: "Practical advice from the Chris Tiley Physiotherapy team" },
  { path: "/privacy-policy", component: "PrivacyPolicy", title: "Privacy Policy | Chris Tiley Physiotherapy", description: "Read how Chris Tiley Physiotherapy collects, uses and protects personal information, including patient and website data.", check: "How I collect, use, and protect your personal information" },
  { path: "/terms-of-service", component: "TermsOfService", title: "Terms of Service | Chris Tiley Physiotherapy", description: "Read the terms for appointments, classes, payments and cancellations at Chris Tiley Physiotherapy in Harborne.", check: "The terms that apply to booking appointments" },
  { path: '/about', component: 'Team', title: 'Meet Our Physiotherapy Team in Harborne | Chris Tiley Physiotherapy', description: 'Meet Chris, Kate and Jessamyn, our physiotherapy team in Harborne, Birmingham. Learn about our approach to rehabilitation, strength and recovery.', check: 'Helping You Move Better' },
  { path: '/contact', component: 'Contact', title: 'Contact Chris Tiley Physiotherapy | Harborne, Birmingham', description: 'Contact Chris Tiley Physiotherapy in Harborne, Birmingham to ask about appointments, physiotherapy and strength classes.', check: 'Contact' },
  { path: '/booking', component: 'Booking', title: 'Book Physiotherapy in Harborne, Birmingham | Chris Tiley Physiotherapy', description: 'Book a physiotherapy appointment at Chris Tiley Physiotherapy in Harborne, Birmingham. Find the right appointment and book online.', check: 'Book' },
  { path: '/strength-rehab-classes', component: 'StrengthRehabClasses', title: 'Strength & Rehab Classes in Harborne | Chris Tiley', description: 'Small-group strength and rehab classes in Harborne, Birmingham. Build strength with guided, progressive exercise tailored to your ability.', check: 'Strength' }
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
    const url = 'https://christileyphysiotherapy.com' + page.path.replace(/\/$/, '') + '/';
    let html = template.replace(/<title>[^<]*<\/title>/, '<title>' + escape(page.title) + '</title>');
    for (const [attr, key, value] of [
      ['name', 'description', page.description], ['property', 'og:title', page.title],
      ['property', 'og:description', page.description], ['property', 'og:url', url],
      ...(page.image ? [
        ['property', 'og:type', page.type],
        ['property', 'og:image', 'https://christileyphysiotherapy.com' + page.image],
        ['property', 'og:image:alt', page.imageAlt],
        ['property', 'og:image:width', page.imageWidth],
        ['property', 'og:image:height', page.imageHeight],
        ['name', 'twitter:card', 'summary_large_image'],
        ['name', 'twitter:image', 'https://christileyphysiotherapy.com' + page.image],
        ['name', 'twitter:image:alt', page.imageAlt],
      ] : [])
    ]) {
      const tag = '<meta ' + attr + '="' + key + '" content="' + escape(value) + '">';
      const pattern = new RegExp('<meta\\s+' + attr + '="' + key + '"[^>]*>', 'i');
      html = pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', tag + '\n</head>');
    }
    // Guard against regressions: each page should have one description and one OG URL.
    for (const [attr, key] of [['name', 'description'], ['property', 'og:url']]) {
      const matches = html.match(new RegExp('<meta\\s+' + attr + '="' + key + '"', 'gi')) || [];
      if (matches.length !== 1) throw new Error('Expected exactly one ' + key + ' on ' + page.path + ', found ' + matches.length);
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
