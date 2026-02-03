import { useMemo } from 'react';

const PARTICLE_COUNT = 20;

export function HeroParticles() {
  const particles = useMemo(
    () =>
      [...Array(PARTICLE_COUNT)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 4,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(({ id, left, top, delay, duration }) => (
        <div
          key={id}
          className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      ))}
    </div>
  );
}
