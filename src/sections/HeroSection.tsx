import { motion, useReducedMotion } from 'framer-motion';
import ReactGA from 'react-ga4';
import { Button } from '../components/Button';
import { ArrowUpRightIcon } from '../components/icons';
import { PageSection } from '../components/PageSection';
import { cn } from '../lib/cn';
import type { Profile, SocialLink } from '../data/portfolio';

export interface HeroSectionProps {
  /** Primary profile metadata for the hero. */
  readonly profile: Profile;
  /** Social or community links showcased in the hero. */
  readonly socials: readonly SocialLink[];
}

/**
 * Hero section introducing the portfolio owner with an animated gradient backdrop and calls to action.
 */
export const HeroSection = ({ profile, socials }: HeroSectionProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <PageSection
      className='relative isolate overflow-hidden pb-20 pt-24 sm:pt-32'
      id='home'
      role='banner'
    >
      <div aria-hidden='true' className='absolute inset-0 -z-10'>
        <div className='absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.25),_transparent_60%)] blur-3xl' />
      </div>

      <div className='mx-auto max-w-4xl'>
        <motion.span
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }
          }
          className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur'
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
          style={
            prefersReducedMotion
              ? undefined
              : {
                  backgroundImage:
                    'linear-gradient(120deg, rgba(99,102,241,0.25), rgba(236,72,153,0.25), rgba(14,165,233,0.25))',
                  backgroundSize: '200% 200%',
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 1.2,
                  ease: 'easeInOut',
                  delay: 0.1,
                  repeat: Infinity,
                }
          }
          viewport={
            prefersReducedMotion ? undefined : { once: true, amount: 0.6 }
          }
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        >
          <span className='inline-flex size-2 rounded-full bg-[rgb(var(--color-accent)/1)]' />
          <span>{profile.location}</span>
        </motion.span>

        <motion.h1
          className='mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl'
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }
          viewport={
            prefersReducedMotion ? undefined : { once: true, amount: 0.6 }
          }
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className='mt-4 text-xl font-medium text-white/70 sm:text-2xl'
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
          }
          viewport={
            prefersReducedMotion ? undefined : { once: true, amount: 0.6 }
          }
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        >
          {profile.headline}
        </motion.p>

        <motion.p
          className='mt-6 max-w-2xl text-lg leading-relaxed text-[rgb(var(--color-muted)/1)]'
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
          }
          viewport={
            prefersReducedMotion ? undefined : { once: true, amount: 0.6 }
          }
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        >
          {profile.about}
        </motion.p>

        <motion.div
          className='mt-8 flex flex-wrap items-center gap-4'
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }
          }
          viewport={
            prefersReducedMotion ? undefined : { once: true, amount: 0.6 }
          }
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        >
          <Button
            href={`mailto:${profile.email}`}
            icon={<ArrowUpRightIcon className='size-4' />}
            onClick={() => {
              ReactGA.event({
                category: 'Button',
                action: 'Click',
                label: "Let's build together",
              });
            }}
          >
            Let's build together
          </Button>
          <Button
            href='#projects'
            icon={<ArrowUpRightIcon className='size-4' />}
            iconPosition='right'
            variant='ghost'
          >
            Explore projects
          </Button>
        </motion.div>

        <motion.ul
          aria-label='Social links'
          className='mt-10 flex flex-wrap items-center gap-4 text-sm text-white/70'
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }
          }
          viewport={
            prefersReducedMotion ? undefined : { once: true, amount: 0.6 }
          }
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        >
          {socials.map((link) => (
            <li key={link.id}>
              <a
                className={cn(
                  'inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-white/70 transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white'
                )}
                href={link.href}
                rel='noopener noreferrer'
                target='_blank'
              >
                <span>{link.label}</span>
                <ArrowUpRightIcon className='size-3.5' />
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </PageSection>
  );
};
