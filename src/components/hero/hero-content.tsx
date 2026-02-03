import { AnimatedSection } from '@/components/animated-section';
import { IconLink } from '@/components/icon-link';
import { HERO, SOCIALS } from '@/lib/constants';

export function HeroContent() {
  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-6">
      <AnimatedSection animation="fadeInUp" delay={0.1}>
        <p className="text-gray-400 text-sm tracking-[0.3em] uppercase">
          {HERO.role}
        </p>
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp" delay={0.2}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text">
          {HERO.name}
        </h1>
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp" delay={0.3}>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {HERO.tagline}
        </p>
      </AnimatedSection>

      <AnimatedSection animation="fadeInUp" delay={0.4}>
        <nav className="flex gap-6 justify-center pt-4" aria-label="Social links">
          {SOCIALS.filter((s) => s.isFooter === false).map(({ href, icon, external }) => (
            <IconLink key={href} href={href} icon={icon} external={external} />
          ))}
        </nav>
      </AnimatedSection>
    </div>
  );
}
