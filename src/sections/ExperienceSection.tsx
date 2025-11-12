import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { PageSection } from '../components/PageSection';
import type { ExperienceItem } from '../data/portfolio';

export interface ExperienceSectionProps {
  /** Professional milestones to render on the timeline. */
  readonly experiences: readonly ExperienceItem[];
}

/**
 * Vertical timeline summarizing key experiences and quantified outcomes.
 */
export const ExperienceSection = ({
  experiences: experienceItems,
}: ExperienceSectionProps) => (
  <PageSection className='relative' id='experience'>
    <SectionHeading
      eyebrow='Experience'
      title='Making an impact across product lifecycles'
      description='Guiding teams from concept to growth with a bias for pairing delightful interactions and measurable outcomes.'
    />

    <div className='mt-12 space-y-10 border-l border-white/10 pl-8'>
      {experienceItems.map((experience, index) => (
        <motion.article
          key={`${experience.company}-${experience.title}`}
          className='relative pl-6'
          initial={{ opacity: 0, x: -16 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className='absolute -left-[41px] top-1 size-2 rounded-full bg-[rgb(var(--color-accent)/1)] ring-4 ring-[rgba(99,102,241,0.2)]' />
          <header className='flex flex-col gap-1 text-white'>
            <span className='text-xs uppercase tracking-[0.3em] text-white/40'>
              {experience.period}
            </span>
            <h3 className='text-2xl font-semibold leading-tight'>
              {experience.title}{' '}
              <span className='text-white/60'>@ {experience.company}</span>
            </h3>
          </header>
          <p className='mt-3 text-base leading-relaxed text-white/70'>
            {experience.summary}
          </p>
          <ul className='mt-4 space-y-2 text-sm text-white/70'>
            {experience.highlights.map((highlight) => (
              <li key={highlight} className='flex items-start gap-3'>
                <span
                  aria-hidden='true'
                  className='mt-1 size-1.5 rounded-full bg-white/40'
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </PageSection>
);
