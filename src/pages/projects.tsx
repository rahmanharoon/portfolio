import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/animated-section';
import { Footer } from '@/components/footer';
import { PROJECTS } from '@/lib/constants';

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fadeInUp">
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-white transition-colors mb-4 inline-block"
            >
              ← Back to Home
            </Link>
            <p className="text-gray-400 text-sm tracking-[0.3em] uppercase mb-4 mt-8">
              All Projects
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-16">Projects</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => {
              const Icon = project.icon;
              return (
                <AnimatedSection
                  key={project.title}
                  animation="fadeInUp"
                  delay={0.1 * (index + 1)}
                >
                  <article className="group p-8 border border-white/10 rounded-lg hover-lift bg-white/5 backdrop-blur-sm h-full">
                    <div className="mb-6 text-gray-400 group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 border border-white/20 rounded-full text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
