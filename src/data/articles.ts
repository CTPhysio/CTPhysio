export interface Article {
  slug: string;
  title: string;
  author: string;
  authorBio: string;
  publishedDate: string;
  excerpt: string;
  featuredImage: string;
  featuredImageAlt: string;
  metaTitle: string;
  metaDescription: string;
}

export const articles: Article[] = [
  {
    slug: 'getting-up-from-the-floor-as-you-get-older',
    title: "Can You Get Up From the Floor? Why It's a Skill Worth Practising as You Get Older",
    author: 'Chris Tiley',
    authorBio: 'Chartered Physiotherapist',
    publishedDate: '2026-10-29',
    excerpt: 'Getting up from the floor is a skill you can practise. Learn how our Over 60s Strength Classes in Harborne build strength, confidence and independence.',
    featuredImage: '/floor-transfers-older-adults.png',
    featuredImageAlt: 'Older woman practising supported kneeling on a mat in a physiotherapy gym',
    metaTitle: 'Getting Up From the Floor as You Age | Harborne Physio',
    metaDescription: 'Worried about getting up from the floor as you get older? Harborne physiotherapist Chris Tiley explains how to build strength and confidence.',
  },
  {
    slug: 'injury-prevention-womens-football',
    title: 'Injury Prevention in Women\u2019s Football: A Practical Guide for Players',
    author: 'Kate Evans',
    authorBio: 'Physiotherapist and former professional footballer',
    publishedDate: '2026-09-19',
    excerpt:
      'Practical injury prevention advice for women\u2019s football, including warm-ups, strength training, training load, recovery and prehabilitation from physiotherapist Kate Evans.',
    featuredImage: '/insights-womens-football.webp',
    featuredImageAlt:
      'Female football player warming up on a pitch during training',
    metaTitle:
      'Injury Prevention in Women\u2019s Football | Chris Tiley Physiotherapy',
    metaDescription:
      'Practical injury prevention advice for women\u2019s football, including warm-ups, strength training, training load, recovery and prehabilitation from physiotherapist Kate Evans.',
  },
];

export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug);
