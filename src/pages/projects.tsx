import { Link } from 'react-router-dom';
import { Footer } from '@/components/reusable/footer';
import { ProjectGrid } from '@/components/projects/project-grid';
import { SEO_DESCRIPTION, SEO_KEYWORDS, SEO_CONFIG } from '@/lib/constants';
import { SEO } from '@/components/reusable/seo';
import { StructuredData } from '@/components/reusable/structured-data';
import { Contact } from '@/components/contact/contact';

export function ProjectsPage() {
  const projectsPageUrl = `${SEO_CONFIG.url}projects`;

  return (
    <>
      <SEO title="Rahman Haroon | Projects" description={SEO_DESCRIPTION} keywords={SEO_KEYWORDS} />
      <StructuredData type="WebPage" pageUrl={projectsPageUrl} />
      <div className="min-h-screen bg-black text-white">
        <section id="projects" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-white transition-colors mb-4 inline-block"
            >
              ← Back to Home
            </Link>
          </div>
          <ProjectGrid heading="All Projects" description="Projects" showSection={false} />
        </section>
        <Contact />
        <Footer />
      </div>
    </>
  );
}
