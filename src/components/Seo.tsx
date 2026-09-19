import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  article?: boolean;
}

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

const Seo: React.FC<SeoProps> = ({ title, description, image, article }) => {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:type"]', 'content', article ? 'article' : 'website');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    if (image) {
      const fullUrl = window.location.origin + image;
      setMeta('meta[property="og:image"]', 'content', fullUrl);
      setMeta('meta[name="twitter:image"]', 'content', fullUrl);
    }
  }, [title, description, image, article]);

  return null;
};

export default Seo;
