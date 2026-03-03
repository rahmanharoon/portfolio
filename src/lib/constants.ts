import type { LucideIcon } from "lucide-react";
import {
  Facebook,
  Github,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  Smartphone,
  Twitter,
  Youtube,
  Globe,
} from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tags: readonly string[];
  icon: LucideIcon;
  webLink?: string;
  appStoreLink?: string;
  playStoreLink?: string;
}

export const HERO = {
  role: "Senior Fullstack Developer",
  name: "Rahman Haroon",
  tagline:
    "A techie at heart, turning caffeine into code and ideas into scalable products. I craft digital experiences that millions love to use.",
} as const;

export const SOCIALS: {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
  isFooter?: boolean;
}[] = [
  {
    label: "GitHub",
    href: "https://github.com/rahmanharoon",
    icon: Github,
    external: true,
    isFooter: false,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rahman-haroon",
    icon: Linkedin,
    external: true,
    isFooter: false,
  },
  {
    label: "X",
    href: "https://x.com/rahman__haroon",
    icon: Twitter,
    external: true,
    isFooter: false,
  },
  {
    label: "Email",
    href: "mailto:rahmanharoon128@gmail.com",
    icon: Mail,
    external: false,
    isFooter: false,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@rahmanharoon3193",
    icon: Youtube,
    external: true,
    isFooter: true,
  },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/13913053/rahman-haroon",
    icon: Layers,
    external: true,
    isFooter: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rahm.n_/",
    icon: Instagram,
    external: true,
    isFooter: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/rahman.haroon.7/",
    icon: Facebook,
    external: true,
    isFooter: true,
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Fliki AI",
    description:
      "An AI-driven content creation platform that converts text into engaging videos using realistic AI voices, dynamic visuals, and automated media generation tools for creators, marketers, and businesses.",
    tags: ["Next.js", "TypeScript", "TTS", "OpenAi", "MongoDB", "Trpc"],
    icon: Globe,
    webLink: "https://fliki.ai/?via=rahman-haroon",
    appStoreLink: "https://apps.apple.com/",
    playStoreLink: "https://play.google.com/store/apps/",
  },
  {
    title: "upGrad Learning",
    description:
      "A large-scale edtech mobile platform delivering structured online degree programs, certification courses, video lectures, and interactive assessments. Designed to support high user concurrency, seamless learning experiences, and real-time progress tracking.",
    tags: ["React Native", "TypeScript", "Firebase", "Redux", "Apollo GraphQL"],
    icon: Smartphone,
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.knowledgehut.onlinecourses",
  },
  {
    title: "Garage Hero",
    description:
      "An AI-powered automotive service management platform built for garages and workshops. It streamlines job tracking, customer management, invoicing, and operational workflows through an intelligent, real-time web dashboard.",
    tags: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Nest.js",
      "TurboRepo",
      "OpenAI",
    ],
    icon: Globe,
    webLink: "https://www.garage-hero.com/",
  },
  {
    title: "Al-Hub",
    description:
      "A digital community and business networking platform that enables members to connect, discover businesses, access exclusive content, and engage through events and interactive features.",
    tags: [
      "React Native",
      "TypeScript",
      "Apollo GraphQL",
      "Firebase",
      "Redux Saga",
    ],
    icon: Smartphone,
    webLink: "https://al-hub.com/",
    appStoreLink: "https://apps.apple.com/kz/app/al-hub/id1567254017",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.alhub_client&hl=en&gl=US",
  },
  {
    title: "PureSpace Living",
    description:
      "A modern home cleaning and lifestyle platform for the UAE that lets residents book recurring or one-time services, manage subscriptions, and track visits in real time—similar to Justlife but tailored to the PureSpace brand.",
    tags: ["Next.js", "Drizzle", "Postgres", "Supabase", "Twilio", "OpenAI"],
    icon: Globe,
    webLink: "https://purespaceliving.ae",
  },
  {
    title: "Stors Business",
    description:
      "An admin and operations portal for business owners to manage menus, orders, stores, staff, and analytics in the Stors ecosystem.",
    tags: [
      "React Native",
      "TypeScript",
      "Firebase Analytics",
      "Sentry",
      "Expo",
      "OpenAI",
    ],
    icon: Smartphone,
    appStoreLink: "https://apps.apple.com/us/app/stors-business/id6446343744",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.stors.android.prod",
  },
  {
    title: "Stors Food Ordering App",
    description:
      "A food ordering platform that lets users discover nearby restaurants, browse menus, and place delivery or pickup orders.",
    tags: [
      "React Native",
      "TypeScript",
      "Firebase Analytics",
      "Sentry",
      "Expo",
    ],
    icon: Smartphone,
    webLink: "https://www.stors.app/",
    appStoreLink:
      "https://apps.apple.com/us/app/stors-food-ordering-app/id6470978691",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.stors.finder.android",
  },
  {
    title: "BuildConnect Pro",
    description:
      "A role-based mobile platform for tenants and admins to manage construction projects, post updates, coordinate tasks, and handle on-site workflows.",
    tags: ["React Native", "AWS Cognito", "Twilio", "Firebase", "Redux"],
    icon: Smartphone,
    playStoreLink:
      "https://play.google.com/store/apps/developer?id=NextPort+Technologies&hl=en_IN&gl=US",
  },
  {
    title: "BuildConnect",
    description:
      "A mobile app for field workers and end users to receive real-time updates, view project progress, and stay informed about construction activities.",
    tags: ["React Native", "AWS Cognito", "Twilio", "Firebase", "Redux"],
    icon: Smartphone,
    playStoreLink:
      "https://play.google.com/store/apps/developer?id=NextPort+Technologies&hl=en_IN&gl=US",
  },
  {
    title: "Phoenix Schools",
    description:
      "An accessible website for a special needs school in Kerala, India, designed to support disabled children and their families with clear information about programs, admissions, and support services.",
    tags: ["HTML", "CSS", "jQuery"],
    icon: Globe,
    webLink: "https://pcsneeds.com",
  },
];

export const SEO_CONFIG = {
  defaultTitle: "Rahman Haroon - Senior Fullstack Developer Portfolio",
  defaultDescription:
    "A techie at heart, turning caffeine into code and ideas into scalable products. I craft digital experiences that millions love to use.",
  image: "/src/assets/rh-logo.png",
  url: "https://rahman-haroon.netlify.app/",
  siteName: "Rahman Haroon Portfolio",
  author: "Rahman Haroon",
  twitterHandle: "@rahmanharoon",
} as const;

export const SEO_DESCRIPTION =
  "Explore my portfolio of projects including Upgrad Learning App, SportsBizz Platform, Garage Hero, and Stors. Built with React, TypeScript, Next.js, and React Native.";

export const SEO_KEYWORDS = [
  "Rahman Haroon Projects",
  "React Projects",
  "TypeScript Projects",
  "Next.js Projects",
  "React Native Projects",
  "Web Development Projects",
  "Mobile App Development",
  "Fullstack Projects",
  "Portfolio Projects",
];
