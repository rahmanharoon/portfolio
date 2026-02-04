import { Hero } from '@/components/hero';
import { ProjectGrid } from '@/components/reusable/project-grid';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { SEO } from '@/components/seo';
import { StructuredData } from '@/components/structured-data';
import { SEO_DESCRIPTION, SEO_KEYWORDS } from '@/lib/constants';

export function HomePage() {
  return (
    <>
      <SEO title="Rahman Haroon" description={SEO_DESCRIPTION} keywords={SEO_KEYWORDS} />
      <StructuredData type="Person" />
      <StructuredData type="WebSite" />
      <div className="min-h-screen bg-black text-white">
        <Hero />
        <ProjectGrid limit={3} />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
