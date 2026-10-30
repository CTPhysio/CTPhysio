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
    ['meta', 'property', 'og:image:alt', title],
    ['meta', 'name', 'twitter:image:alt', title],
    ['meta', 'name', 'twitter:card', 'summary_large_image'],
    ['meta', 'name', 'twitter:image', origin + image],
  ];
  let html = base.replace(/<title>[^<]*<\/title>/, '<title>' + escape(title) + '</title>');
  for (const [, attr, key, value] of tags) {
    const tag = '<meta ' + attr + '="' + key + '" content="' + escape(value) + '">';
    const pattern = new RegExp('<meta\\s+' + attr + '="' + key + '"[^>]*>');
    html = pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', tag + '\n</head>');
  }
  html = html.replace(/<meta property="og:image:(?:width|height)"[^>]*>\s*/g, '');
  html = html.replace('</head>', '<link rel="canonical" href="' + url + '">\n</head>');
  const directory = join('dist', path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'index.html'), html);
}


// Pilot: serve useful, crawlable HTML for the Over 60s class page before React loads.
// The client-side app continues to take over normally. Keep this snapshot in sync
// with the React component until a full automated pre-render solution is adopted.
{
  const path = '/over-60s-strength-classes';
  const url = origin + path;
  const title = 'Over 60s Strength Classes in Harborne, Birmingham | Chris Tiley Physiotherapy';
  const description = 'Small-group strength and fitness classes for over 60s in Harborne, Birmingham. Led by a physiotherapist, with individualised exercises to build strength, balance, fitness and confidence.';
  const snapshot = `
    <div class="bg-white">
      <main id="over60s-static-content" class="max-w-5xl mx-auto px-5 py-10">
        <h1 class="text-3xl font-bold mb-4">Over 60s Strength Classes</h1>
        <p class="text-lg mb-3">Build strength, fitness and confidence to keep doing the things you enjoy.</p>
        <p class="mb-4">Small-group strength training in Harborne, Birmingham, with a physiotherapist there throughout. Maximum 5 people per class.</p>
        <p class="mb-6"><a class="underline text-sky-700" href="https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings">Book a free 20-minute Discovery Visit</a></p>
        <h2 class="text-2xl font-bold mb-3">Staying strong means staying capable</h2>
        <p class="mb-4">Strength training can help maintain muscle strength, support bone health, improve balance and maintain fitness for everyday life. Exercises are adapted to your current ability and progressed gradually.</p>
        <h2 class="text-2xl font-bold mb-3">What the classes include</h2>
        <p class="mb-4">Progressive resistance training, balance exercises, fitness intervals, bone health and falls preparedness, including practising getting down to and back up from the floor.</p>
        <h2 class="text-2xl font-bold mb-3">Current class timetable</h2>
        <p class="mb-4">Tuesday 11:00am — full; Tuesday 2:30pm — full; Thursday 1:30pm — full; Thursday 2:30pm — full.</p>
        <h2 class="text-2xl font-bold mb-3">Proposed Monday 2:30pm class</h2>
        <p class="mb-4">We are considering an additional Over 60s Strength Class on Mondays at 2:30pm. This class is not running yet. It will start once three people are ready to join. <a class="underline text-sky-700" href="mailto:info@christileyphysiotherapy.com?subject=Monday%202%3A30pm%20Over%2060s%20class%20interest">Email to express interest</a>; this is not a confirmed booking.</p>
        <h2 class="text-2xl font-bold mb-3">Getting started</h2>
        <p>Book a free Discovery Visit to see the training space, meet the team and discuss whether the class is right for you. No previous experience of lifting weights is required.</p>
      </main>
    </div>`;
  let html = base.replace(/<title>[^<]*<\\/title>/, '<title>' + escape(title) + '</title>');
  const metas = [
    ['name', 'description', description],
    ['property', 'og:title', title],
    ['property', 'og:description', description],
    ['property', 'og:url', url],
    ['property', 'og:type', 'website'],
    ['property', 'og:image', origin + '/og-over60s-strength-classes.png'],
  ];
  for (const [attr, key, value] of metas) {
    const tag = '<meta ' + attr + '="' + key + '" content="' + escape(value) + '">';
    const pattern = new RegExp('<meta\\\\s+' + attr + '="' + key + '"[^>]*>');
    html = pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', tag + '\\n</head>');
  }
  html = html.replace('</head>', '<link rel="canonical" href="' + url + '">\\n</head>');
  html = html.replace('<div id="root"></div>', '<div id="root">' + snapshot + '</div>');
  const directory = join('dist', path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'index.html'), html);
}
