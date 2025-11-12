import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { cn } from '../lib/cn';
import type { Profile } from '../data/portfolio';

export interface NavigationLink {
  /** Hash anchor reference for the target section. */
  readonly href: string;
  /** Visible label for the navigation link. */
  readonly label: string;
}

export interface AppHeaderProps {
  /** Profile metadata for the brand identity. */
  readonly profile: Profile;
  /** Section anchors exposed in the top navigation. */
  readonly links: readonly NavigationLink[];
}

/**
 * Floating navigation bar that condenses on scroll and provides quick section access.
 */
export const AppHeader = ({ profile, links }: AppHeaderProps) => {
  const [isElevated, setIsElevated] = useState(false);

  useEffect(() => {
    let animationFrame = 0;

    const handleScroll = (): void => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setIsElevated(window.scrollY > 32);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-6 transition-all duration-300',
        isElevated ? 'py-4' : 'py-6'
      )}
      initial={{ y: -12, opacity: 0 }}
    >
      <nav
        aria-label='Primary'
        className={cn(
          'flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-[rgba(9,11,22,0.72)] px-6 py-3 shadow-[0_20px_60px_rgba(2,6,23,0.35)] backdrop-blur-xl transition-all duration-300',
          isElevated ? 'border-white/20 bg-[rgba(9,11,22,0.88)]' : undefined
        )}
      >
        <a
          className='text-sm font-semibold uppercase tracking-[0.4em] text-white/60'
          href='#home'
        >
          {profile.name}
        </a>

        <ul className='hidden items-center gap-6 text-sm text-white/70 md:flex'>
          {links.map((link) => (
            <li key={link.href}>
              <a
                className='rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white'
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button href={`mailto:${profile.email}`} size='md' variant='secondary'>
          Let's talk
        </Button>
      </nav>
    </motion.header>
  );
};
