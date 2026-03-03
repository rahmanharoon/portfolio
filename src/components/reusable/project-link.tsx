import { Globe, Apple, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ProjectLinkVariant = 'web' | 'appstore' | 'playstore';

const VARIANT_CONFIG: Record<
  ProjectLinkVariant,
  { icon: typeof Globe; label: string }
> = {
  web: { icon: Globe, label: 'Web' },
  appstore: { icon: Apple, label: 'App Store' },
  playstore: { icon: Play, label: 'Play Store' },
};

interface ProjectLinkProps {
  href: string;
  variant: ProjectLinkVariant;
  className?: string;
}

export function ProjectLink({ href, variant, className }: ProjectLinkProps) {
  const { icon: Icon, label } = VARIANT_CONFIG[variant];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20 text-sm text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/30 transition-colors',
        className
      )}
      aria-label={`${label} - Open in new tab`}
    >
      <Icon size={16} aria-hidden />
      <span>{label}</span>
    </a>
  );
}


