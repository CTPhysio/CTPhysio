import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
  canonicalPath?: string;
}

const SITE_URL = 'https://christileyphysiotherapy.com';

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    const [name] = selector.match(/(?:name|property)="([^"]+)"/) || [];
    if (name) {
      const val = name.split('=')[1].replace(/"/g, '');
      el.setAttribute(selector.includes('property') ? 'property' : 'name', val);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const setCanonical = (href: string) => {
  let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const setStructuredData = (id: string, json: object) => {
  let el = document.head.querySelector(`script[data-structured="${id}"]`) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.setAttribute('type', 'application/ld+json');
    el.setAttribute('data-structured', id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(json);
};

const Seo: React.FC<SeoProps> = ({ title, description, image, article, canonicalPath }) => {
  useEffect(() => {
    const canonicalUrl = canonicalPath ? `${SITE_URL}${canonicalPath}` : window.location.href;

    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:type"]', 'content', article ? 'article' : 'website');
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setCanonical(canonicalUrl);

    if (image) {
      const fullUrl = image.startsWith('http') ? image : window.location.origin + image;
      setMeta('meta[property="og:image"]', 'content', fullUrl);
      setMeta('meta[name="twitter:image"]', 'content', fullUrl);
    }

    if (canonicalPath) {
      setStructuredData(canonicalPath, {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: title,
        description: description,
        url: canonicalUrl,
        provider: {
          '@type': 'MedicalBusiness',
          name: 'Chris Tiley Physiotherapy',
          telephone: '0121 517 0806',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '24 Earls Ct Rd',
            addressLocality: 'Harborne, Birmingham',
            postalCode: 'B17 9AH',
            addressCountry: 'GB',
          },
        },
      });
    }
  }, [title, description, image, article, canonicalPath]);

  return null;
};

export default Seo;
