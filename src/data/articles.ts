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
