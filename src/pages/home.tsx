import { lazy, Suspense } from 'react';
import { Hero } from '@/components/hero';
import { ProjectGrid } from '@/components/projects/project-grid';
import { Loader } from '@/components/reusable/loader';
import { SEO } from '@/components/reusable/seo';
import { StructuredData } from '@/components/reusable/structured-data';
import { SEO_DESCRIPTION, SEO_KEYWORDS } from '@/lib/constants';

const Contact = lazy(() => import('@/components/contact/contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('@/components/reusable/footer').then(module => ({ default: module.Footer })));

export function HomePage() {
  return (
    <>
      <SEO title="Rahman Haroon" description={SEO_DESCRIPTION} keywords={SEO_KEYWORDS} />
      <StructuredData type="Person" />
      <StructuredData type="WebSite" />
      <div className="min-h-screen bg-black text-white">
        <Hero />
        <ProjectGrid limit={3} />
        <Suspense fallback={<Loader />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}
