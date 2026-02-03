import { Mail } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { SOCIALS } from '@/lib/constants';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto text-center">
        <AnimatedSection animation="fadeInUp">
          <p className="text-gray-400 text-sm tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Let's Work Together
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12">
            Open to new opportunities and collaborations. Feel free to reach out
            if you'd like to discuss a project.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={0.2}>
          <a
            href="mailto:rahmanharoon128@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            <Mail size={18} />
            Send Email
          </a>
        </AnimatedSection>

        <AnimatedSection animation="fadeIn" delay={0.4}>
          <nav
            className="flex gap-6 justify-center mt-12"
            aria-label="Contact links"
          >
            {SOCIALS.map(({ label, href, external, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors link-underline"
                aria-label={label}
              >
                <span className="md:hidden">
                  <Icon size={18} />
                </span>
                <span className="hidden md:inline">{label}</span>
              </a>
            ))}
          </nav>
        </AnimatedSection>
      </div>
    </section>
  );
}
