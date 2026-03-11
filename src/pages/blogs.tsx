import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/reusable/footer';
import { BlogGrid } from '@/components/blogs/blog-grid';
import { SEO_DESCRIPTION, SEO_KEYWORDS, SEO_CONFIG } from '@/lib/constants';
import { SEO } from '@/components/reusable/seo';
import { StructuredData } from '@/components/reusable/structured-data';
import { Contact } from '@/components/contact/contact';

export function BlogsPage() {
  const blogsPageUrl = `${SEO_CONFIG.url}blogs`;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEO title="Rahman Haroon | Blogs" description={SEO_DESCRIPTION} keywords={SEO_KEYWORDS} />
      <StructuredData type="WebPage" pageUrl={blogsPageUrl} />
      <div className="min-h-screen bg-black text-white">
        <section id="blogs" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-white transition-colors mb-4 inline-block"
            >
              ← Back to Home
            </Link>
          </div>
          <BlogGrid heading="All Blogs" description="Blogs" showSection={false} />
        </section>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

