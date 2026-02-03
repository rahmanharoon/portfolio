import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type IconLinkProps = {
  href: string;
  icon: LucideIcon;
  external?: boolean;
  size?: number;
  className?: string;
};

export function IconLink({
  href,
  icon: Icon,
  external = true,
  size = 20,
  className,
}: IconLinkProps) {
  const baseClassName =
    'p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300';

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseClassName, className)}
      >
        <Icon size={size} />
      </a>
    );
  }

  return (
    <a href={href} className={cn(baseClassName, className)}>
      <Icon size={size} />
    </a>
  );
}
