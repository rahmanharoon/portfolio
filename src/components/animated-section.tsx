import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const ANIMATIONS = {
  fadeInUp: 'animate-fadeInUp',
  fadeIn: 'animate-fadeIn',
  slideInLeft: 'animate-slideInLeft',
  slideInRight: 'animate-slideInRight',
} as const;

type AnimationType = keyof typeof ANIMATIONS;

export function AnimatedSection({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
}) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? ANIMATIONS[animation] : 'opacity-0-init'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
