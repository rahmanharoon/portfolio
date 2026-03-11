import { Link } from 'react-router-dom';
import { BookOpen, ExternalLink } from 'lucide-react';
import { blogs } from '@/lib/constants';

interface BlogGridProps {
  limit?: number;
  heading?: string;
  description?: string;
  showSection?: boolean;
}

export function BlogGrid({
  limit,
  heading = 'Writing',
  description = 'Blogs',
  showSection = true,
}: BlogGridProps) {
  const displayedBlogs = limit ? blogs.slice(0, limit) : blogs;

  const content = (
    <div className="max-w-5xl mx-auto">
      <p className="text-gray-400 text-sm tracking-[0.3em] uppercase mb-4">{heading}</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-16">{description}</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {displayedBlogs.map((blog) => (
          <article
            key={blog.href}
            className="group p-8 border border-white/10 rounded-lg hover-lift bg-white/5 backdrop-blur-sm h-full"
          >
            <div className="mb-6 text-gray-400 group-hover:text-white transition-colors">
              <BookOpen size={24} />
            </div>

            <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{blog.description}</p>

            <div className="mt-auto">
              <a
                href={blog.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20 text-sm text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/30 transition-colors"
                aria-label="Read blog in new tab"
              >
                <ExternalLink size={16} aria-hidden />
                <span>Read</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {limit && blogs.length > limit && (
        <div className="mt-12 text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center justify-center px-6 py-3 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            View All Blogs
          </Link>
        </div>
      )}
    </div>
  );

  if (showSection) {
    return (
      <section id="blogs" className="py-24 px-6">
        {content}
      </section>
    );
  }

  return content;
}

