import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/animated-section';
import { Footer } from '@/components/footer';
import { ProjectGrid } from '@/components/reusable/project-grid';
import { SEO_DESCRIPTION, SEO_KEYWORDS, SEO_CONFIG } from '@/lib/constants';
import { SEO } from '@/components/seo';
import { StructuredData } from '@/components/structured-data';

export function ProjectsPage() {
  const projectsPageUrl = `${SEO_CONFIG.url}projects`;

  return (
    <>
      <SEO title="Rahman Haroon | Projects" description={SEO_DESCRIPTION} keywords={SEO_KEYWORDS} />
      <StructuredData type="WebPage" pageUrl={projectsPageUrl} />
      <div className="min-h-screen bg-black text-white">
        <section id="projects" className="py-24 px-6">
          <AnimatedSection animation="fadeInUp">
            <div className="max-w-5xl mx-auto">
              <Link
                to="/"
                className="text-gray-400 text-sm hover:text-white transition-colors mb-4 inline-block"
              >
                ← Back to Home
              </Link>
            </div>
          </AnimatedSection>
          <ProjectGrid heading="All Projects" description="Projects" showSection={false} />
        </section>
        <Footer />
      </div>
    </>
  );
}
