import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';

export function HeroScrollCta() {
  return (
    <AnimatedSection
      animation="fadeIn"
      delay={0.6}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <a
        href="#projects"
        className="animate-bounce block"
        aria-label="Scroll to projects"
      >
        <ChevronDown size={24} className="text-gray-500" />
      </a>
    </AnimatedSection>
  );
}
