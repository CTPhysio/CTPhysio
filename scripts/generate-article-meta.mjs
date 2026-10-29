import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const origin = 'https://christileyphysiotherapy.com';
const pages = [
  ['/advice/getting-up-from-the-floor-as-you-get-older', "Can You Get Up From the Floor? Why It's a Skill Worth Practising as You Get Older", 'Getting up from the floor is a skill you can practise. Learn how our Over 60s Strength Classes in Harborne build strength, confidence and independence.', '/floor-transfers-older-adults.png'],
  ['/advice/injury-prevention-womens-football', 'Injury Prevention in Women’s Football: A Practical Guide for Players', 'Practical injury prevention advice for women’s football, including warm-ups, strength training, training load and recovery.', '/insights-womens-football.webp'],
  ['/strength-training-over-60s', 'Strength Training for Over 60s: How to Get Started', 'A Birmingham physiotherapist explains how to start strength training after 60, from choosing exercises to progressing safely.', '/assets/images/ChatGPT_Image_Sep_25,_2026,_03_49_06_PM.png'],
];
const escape = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const base = await readFile('dist/index.html', 'utf8');
for (const [path, title, description, image] of pages) {
  const url = origin + path;
  const tags = [
    ['meta', 'name', 'description', description],
    ['meta', 'property', 'og:title', title],
    ['meta', 'property', 'og:description', description],
    ['meta', 'property', 'og:url', url],
    ['meta', 'property', 'og:type', 'article'],
    ['meta', 'property', 'og:image', origin + image],
    ['meta', 'name', 'twitter:card', 'summary_large_image'],
    ['meta', 'name', 'twitter:image', origin + image],
  ];
  let html = base.replace(/<title>[^<]*<\/title>/, '<title>' + escape(title) + '</title>');
  for (const [, attr, key, value] of tags) {
    const tag = '<meta ' + attr + '="' + key + '" content="' + escape(value) + '">';
    const pattern = new RegExp('<meta\\s+' + attr + '="' + key + '"[^>]*>');
    html = pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', tag + '\n</head>');
  }
  html = html.replace('</head>', '<link rel="canonical" href="' + url + '">\n</head>');
  const directory = join('dist', path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'index.html'), html);
}
