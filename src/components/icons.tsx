import { cn } from '../lib/cn';

export interface IconProps {
  /** Additional styling classes forwarded to the SVG element. */
  readonly className?: string;
}

/**
 * Minimal arrow icon that hints at external navigation.
 */
export const ArrowUpRightIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden='true'
    className={cn('size-4', className)}
    fill='none'
    role='presentation'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    viewBox='0 0 24 24'
  >
    <path d='M7 17 17 7' />
    <path d='M7 7h10v10' />
  </svg>
);
