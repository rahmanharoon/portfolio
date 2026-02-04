import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type IconLinkProps = {
  href: string;
  icon: LucideIcon;
  label: string;
  external?: boolean;
  size?: number;
  className?: string;
};

export function IconLink({
  href,
  icon: Icon,
  label,
  external = true,
  size = 20,
  className,
}: IconLinkProps) {
  const baseClassName =
    'p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300';

  const additionalProps = external
    ? {
      target: '_blank',
      rel: 'noopener noreferrer',
    }
    : {};

  return (
    <a
      href={href}
      {...additionalProps}
      className={cn(baseClassName, className)}
      aria-label={label}
    >
      <Icon size={size} aria-hidden="true" />
    </a>
  );
}
