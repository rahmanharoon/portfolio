import { useEffect } from 'react';
import { SEO_CONFIG } from '@/lib/constants';

interface SEOProps {
  title: string;
  description: string;
  keywords: readonly string[];
}

export function SEO({ title, description, keywords }: SEOProps) {
  const fullUrl = SEO_CONFIG.url + (typeof window !== 'undefined' ? window.location.pathname : '');

  useEffect(() => {
    document.title = title;

    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    updateMetaTag('author', SEO_CONFIG.author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', SEO_CONFIG.image, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', SEO_CONFIG.siteName, true);
    updateMetaTag('og:locale', 'en_US', true);
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', SEO_CONFIG.image);
    updateMetaTag('twitter:creator', SEO_CONFIG.twitterHandle);
    updateMetaTag('twitter:site', SEO_CONFIG.twitterHandle);
    updateLinkTag('canonical', fullUrl);
    updateMetaTag('theme-color', '#000000');
    updateMetaTag('msapplication-TileColor', '#000000');
  }, [title, description, keywords.join(', '), fullUrl]);

  return null;
}
