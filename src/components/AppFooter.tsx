import { SectionHeading } from './SectionHeading';
import { PageSection } from './PageSection';
import type { SocialLink } from '../data/portfolio';
import { ArrowUpRightIcon } from './icons';
import { cn } from '../lib/cn';

export interface AppFooterProps {
  /** Social links displayed in the footer. */
  readonly socials: readonly SocialLink[];
}

/**
/**
 * Footer summarizing the brand and extending quick social access.
 */
export const AppFooter = ({ socials }: AppFooterProps) => (
  <footer className='border-t border-white/10 bg-[rgba(9,11,22,0.8)] backdrop-blur-xl'>
    <PageSection
      className='flex flex-col gap-8 pb-12 pt-12 sm:flex-row sm:items-center sm:justify-between'
      id='footer'
    >
      <div className='max-w-md'>
        <SectionHeading
          eyebrow='Crafted with care'
          title='Thanks for scrolling!'
          description='This portfolio is built with React, Tailwind CSS v4, and a sprinkle of Framer Motion to keep interactions lively yet thoughtful.'
        />
      </div>
      <ul className='flex flex-wrap gap-4 text-sm text-white/60'>
        {socials.map((social) => (
          <li key={social.id}>
            <a
              className={cn(
                'inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-white/30 hover:text-white'
              )}
              href={social.href}
              rel='noopener noreferrer'
              target='_blank'
            >
              <span>{social.label}</span>
              <ArrowUpRightIcon className='size-3.5' />
            </a>
          </li>
        ))}
      </ul>
    </PageSection>
  </footer>
);
