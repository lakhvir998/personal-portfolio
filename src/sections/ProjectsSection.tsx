import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { ArrowUpRightIcon } from '../components/icons';
import { PageSection } from '../components/PageSection';
import { SectionHeading } from '../components/SectionHeading';
import { cn } from '../lib/cn';
import type { ProjectItem } from '../data/portfolio';

export interface ProjectsSectionProps {
  /** Projects to showcase with supporting metadata. */
  readonly projects: readonly ProjectItem[];
}

/**
 * Grid of highlighted projects with animations and contextual actions.
 */
export const ProjectsSection = ({ projects }: ProjectsSectionProps) => (
  <PageSection className='relative' id='projects'>
    <SectionHeading
      eyebrow='Selected Work'
      title='Projects that balance form and function'
      description='A preview of experiments and shipped products that demonstrate thoughtful interaction design and strong technical execution.'
    />

    <div className='mt-12 grid gap-8 lg:grid-cols-3'>
      {projects.map((project, index) => (
        <motion.article
          key={project.name}
          className='group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[rgb(var(--color-card)/1)] p-6 shadow-[0_30px_80px_rgba(2,6,23,0.35)] transition hover:-translate-y-2'
          initial={{ opacity: 0, y: 24 }}
          transition={{
            duration: 0.6,
            delay: index * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            aria-hidden='true'
            className={cn(
              'absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100',
              'bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.28),_transparent_70%)]'
            )}
          />
          <span className='text-xs uppercase tracking-[0.3em] text-white/40'>
            Featured project
          </span>
          <h3 className='mt-3 text-2xl font-semibold text-white'>
            {project.name}
          </h3>
          <p className='mt-4 text-sm leading-relaxed text-white/70'>
            {project.description}
          </p>

          <ul className='mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-wider text-white/60'>
            {project.stack.map((tech) => (
              <li
                key={tech}
                className='rounded-full border border-white/10 bg-white/5 px-3 py-1'
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className='mt-8 flex flex-wrap gap-3'>
            {project.liveUrl ? (
              <Button
                href={project.liveUrl}
                icon={<ArrowUpRightIcon className='size-4' />}
                variant='primary'
              >
                Live preview
              </Button>
            ) : null}
            {project.repoUrl ? (
              <Button
                href={project.repoUrl}
                icon={<ArrowUpRightIcon className='size-4' />}
                variant='secondary'
              >
                View code
              </Button>
            ) : null}
          </div>
        </motion.article>
      ))}
    </div>
  </PageSection>
);
