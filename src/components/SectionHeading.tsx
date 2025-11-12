import { motion } from 'framer-motion';
import { cn } from '../lib/cn';

export interface SectionHeadingProps {
  /** Short descriptor displayed above the heading. */
  readonly eyebrow: string;
  /** Primary headline for the section. */
  readonly title: string;
  /** Optional supporting description placed under the headline. */
  readonly description?: string;
  /** Text alignment preference for the section header. */
  readonly align?: 'left' | 'center';
}

/**
 * Animated heading block that introduces a portfolio section with consistent styling.
 */
export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) => (
  <motion.header
    className={cn(
      'flex flex-col gap-3',
      align === 'center' ? 'items-center text-center' : 'items-start text-left'
    )}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    <span className='text-sm font-medium uppercase tracking-[0.2em] text-white/60'>
      {eyebrow}
    </span>
    <h2 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
      {title}
    </h2>
    {description ? (
      <p className='max-w-2xl text-base leading-relaxed text-[rgb(var(--color-muted)/1)] sm:text-lg'>
        {description}
      </p>
    ) : null}
  </motion.header>
);
