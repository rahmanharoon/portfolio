import { useEffect } from 'react';
import { SEO_CONFIG, HERO, SOCIALS } from '@/lib/constants';

interface StructuredDataProps {
  type?: 'Person' | 'WebSite' | 'WebPage';
  pageUrl?: string;
}

export function StructuredData({ type = 'Person', pageUrl }: StructuredDataProps) {
  useEffect(() => {
    const baseUrl = SEO_CONFIG.url;
    const currentUrl = pageUrl || (typeof window !== 'undefined' ? window.location.href : baseUrl);

    // Extract social links and email from SOCIALS
    const sameAs = SOCIALS.filter((social) => social.external && !social.href.startsWith('mailto:')).map((social) => social.href);
    const email = SOCIALS.find((social) => social.href.startsWith('mailto:'))?.href.replace('mailto:', '') || '';

    let structuredData: object;

    if (type === 'Person') {
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: HERO.name,
        jobTitle: HERO.role,
        description: HERO.tagline,
        url: baseUrl,
        sameAs,
        email,
        knowsAbout: [
          'React',
          'TypeScript',
          'Next.js',
          'React Native',
          'Node.js',
          'Fullstack Development',
          'Web Development',
          'Mobile Development',
        ],
      };
    } else if (type === 'WebSite') {
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SEO_CONFIG.siteName,
        url: baseUrl,
        description: SEO_CONFIG.defaultDescription,
        author: {
          '@type': 'Person',
          name: HERO.name,
        },
      };
    } else {
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `${HERO.name} - Portfolio`,
        url: currentUrl,
        description: SEO_CONFIG.defaultDescription,
        inLanguage: 'en-US',
        isPartOf: {
          '@type': 'WebSite',
          name: SEO_CONFIG.siteName,
          url: baseUrl,
        },
      };
    }

    // Remove existing structured data script if any
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data script
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, pageUrl]);

  return null;
}
