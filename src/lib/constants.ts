import type { LucideIcon } from 'lucide-react';
import {
  Code2,
  Facebook,
  Github,
  Globe,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  Smartphone,
  Youtube,
} from 'lucide-react';

export const HERO = {
  role: 'Senior Fullstack Developer',
  name: 'Rahman Haroon',
  tagline:
    'A techie at heart, turning caffeine into code and ideas into scalable products. I craft digital experiences that millions love to use.',
} as const;

export const SOCIALS: {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
  isFooter?: boolean;
}[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/rahmanharoon',
    icon: Github,
    external: true,
    isFooter: false,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/rahman-haroon',
    icon: Linkedin,
    external: true,
    isFooter: false,
  },
  {
    label: 'Email',
    href: 'mailto:rahmanharoon128@gmail.com',
    icon: Mail,
    external: false,
    isFooter: false,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@rahmanharoon3193',
    icon: Youtube,
    external: true,
    isFooter: true,
  },
  {
    label: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/13913053/rahman-haroon',
    icon: Layers,
    external: true,
    isFooter: true,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/rahm.n_/',
    icon: Instagram,
    external: true,
    isFooter: true,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/rahman.haroon.7/',
    icon: Facebook,
    external: true,
    isFooter: true,
  },
];

export const PROJECTS: {
  title: string;
  description: string;
  tags: readonly string[];
  icon: LucideIcon;
}[] = [
  {
    title: 'Upgrad Learning App',
    description:
      'Founding engineer for learning platform. Delivered MVP to Play Store in 2 months. Improved learner retention by 400%.',
    tags: ['React Native', 'TypeScript', 'Firebase'],
    icon: Smartphone,
  },
  {
    title: 'SportsBizz Platform',
    description:
      'Migrated from JS to TypeScript. Integrated TanStack Query with caching strategies for faster data loads.',
    tags: ['TypeScript', 'TanStack Query', 'Next.js'],
    icon: Globe,
  },
  {
    title: 'Garage Hero',
    description:
      'Built AI-powered chat interface with OpenAI, Whisper, OCR, TTS. Custom UI library with MCP-powered component generator.',
    tags: ['Next.js', 'Nest.js', 'OpenAI'],
    icon: Code2,
  },
  {
    title: 'Stors',
    description:
      'Restaurant management platform with a mobile app for staff and a web dashboard for owners. Orders, inventory, and analytics in one place.',
    tags: ['Next.js', 'React Native', 'Expo'],
    icon: Globe,
  },
];
