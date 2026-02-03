import { useEffect, useState } from 'react';
import { HeroBackground } from './hero-background';
import { HeroParticles } from './hero-particles';
import { HeroContent } from './hero-content';
import { HeroScrollCta } from './hero-scroll-cta';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden"
      aria-label="Introduction"
    >
      <HeroBackground mouseX={mousePosition.x} mouseY={mousePosition.y} />
      <HeroParticles />
      <HeroContent />
      <HeroScrollCta />
    </section>
  );
}
