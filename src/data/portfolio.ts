/**
 * Represents a skill grouping with a shared theme.
 */
export interface SkillCategory {
  /** Display name of the skill category. */
  readonly name: string;
  /** Short descriptor providing additional context. */
  readonly description: string;
  /** Individual skills embodied by the category. */
  readonly skills: readonly string[];
}

/**
 * Captures the details of a professional experience entry.
 */
export interface ExperienceItem {
  /** Organization or client name. */
  readonly company: string;
  /** Role or title held during the experience period. */
  readonly title: string;
  /** Date range for the experience. */
  readonly period: string;
  /** Narrative summary for the role. */
  readonly summary: string;
  /** Notable achievements or responsibilities. */
  readonly highlights: readonly string[];
}

/**
 * Defines an individual project showcased in the portfolio.
 */
export interface ProjectItem {
  /** Project title used in the UI. */
  readonly name: string;
  /** Short description outlining the project's purpose. */
  readonly description: string;
  /** Technologies that power the project. */
  readonly stack: readonly string[];
  /** Primary call-to-action link for the project (live demo). */
  readonly liveUrl?: string;
  /** Secondary link for the source code repository. */
  readonly repoUrl?: string;
}

/**
 * Metadata about the portfolio owner.
 */
export interface Profile {
  /** Full name used for headings and metadata. */
  readonly name: string;
  /** Primary role or specialization tagline. */
  readonly headline: string;
  /** Brief summary describing focus and value proposition. */
  readonly about: string;
  /** Geographic location of the professional. */
  readonly location: string;
  /** Preferred contact e-mail address. */
  readonly email: string;
}

/**
 * External social or professional network links.
 */
export interface SocialLink {
  /** Unique identifier for rendering list keys. */
  readonly id: string;
  /** Platform label shown to the user. */
  readonly label: string;
  /** Destination URL for the platform. */
  readonly href: string;
}

/**
 * Primary profile information displayed across the portfolio.
 */
export const profile: Profile = {
  name: 'Lakhvir Kumar',
  headline: 'Full-Stack Software Engineer',
  about:
    'I craft resilient web experiences that balance delightful interfaces with dependable engineering. Strong focus on design systems, performance, and ship-ready code.',
  location: 'Mohali, India',
  email: 'lakhvirkumar998@gmail.com',
};

/**
 * Prominent social platforms for effortless networking.
 */
export const socialLinks: readonly SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/lakhvir998',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lakhvirkumar998/',
  },
];

/**
 * Curated selection of skill groups that showcase breadth and depth.
 */
export const skillCategories: readonly SkillCategory[] = [
  {
    name: 'Frontend Engineering',
    description:
      'Creating accessible, responsive experiences with a design-first mindset.',
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'Storybook',
    ],
  },
  {
    name: 'Backend & Infrastructure',
    description:
      'Designing secure APIs and automating deployments with confidence.',
    skills: ['Node.js', 'GraphQL', 'PostgreSQL', 'Prisma', 'tRPC', 'Docker'],
  },
  {
    name: 'Product & Collaboration',
    description:
      'Driving outcomes with metrics, empathy, and cross-functional clarity.',
    skills: [
      'Product Strategy',
      'Design Systems',
      'UX Research',
      'Agile Coaching',
      'Mentorship',
    ],
  },
];

/**
 * Professional milestones that demonstrate experience and impact.
 */
export const experiences: readonly ExperienceItem[] = [
  {
    company: 'Tech9',
    title: 'Software Engineer',
    period: '2021 - Present',
    summary:
      'Building scalable web applications and delivering high-quality software solutions with a focus on clean code, performance optimization, and collaborative development.',
    highlights: [
      'Developed and maintained full-stack applications using modern web technologies and best practices.',
      'Collaborated with cross-functional teams to deliver features that improved user experience and system performance.',
      'Contributed to code reviews, technical discussions, and knowledge sharing to maintain high code quality standards.',
    ],
  },
];

/**
 * Highlight projects that demonstrate engineering breadth and visual polish.
 */
export const projects: readonly ProjectItem[] = [
  {
    name: 'Usearch',
    description:
      'A modern search platform where I developed React components, optimized application performance, and implemented new features to enhance user experience and functionality.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://usearch.com/',
  },
  {
    name: 'Optery',
    description:
      "Built the complete UI from scratch for Optery's MVP, a privacy-focused platform that helps users remove personal information from data brokers. Designed and implemented a modern, user-friendly interface for their award-winning data removal service.",
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://www.optery.com/',
  },
  {
    name: 'Hoptale',
    description:
      "Migrated Hoptale's React single-page application to Next.js, improving performance, SEO, and user experience. A smart travel journal and itinerary app that helps users remember and share their journeys with integrated photos, maps, and travel stories.",
    stack: ['Next.js', 'React', 'TypeScript'],
    liveUrl: 'https://hoptale.com/',
  },
];
