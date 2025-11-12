import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { PageSection } from '../components/PageSection';
import { cn } from '../lib/cn';
import type { SkillCategory } from '../data/portfolio';

export interface SkillsSectionProps {
  /** Skill categories grouped for display. */
  readonly categories: readonly SkillCategory[];
}

/**
 * Responsive grid highlighting grouped skill sets with subtle hover animations.
 */
export const SkillsSection = ({ categories }: SkillsSectionProps) => (
  <PageSection className='relative' id='skills'>
    <SectionHeading
      eyebrow='Toolkit'
      title='Skills that deliver polish and performance'
      description='A balanced blend of product thinking, interface craftsmanship, and platform expertise.'
    />

    <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {categories.map((category, index) => (
        <motion.article
          key={category.name}
          className={cn(
            'group relative overflow-hidden rounded-2xl border border-white/10 bg-[rgb(var(--color-card)/1)] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.35)] transition-transform hover:-translate-y-2'
          )}
          initial={{ opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.14),_transparent_65%)] transition-all group-hover:scale-125' />
          <h3 className='text-xl font-semibold text-white'>{category.name}</h3>
          <p className='mt-3 text-sm leading-relaxed text-white/60'>
            {category.description}
          </p>
          <ul className='mt-6 flex flex-wrap gap-2'>
            {category.skills.map((skill) => (
              <li
                key={skill}
                className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/70'
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </PageSection>
);
