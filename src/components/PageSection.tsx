import type { ComponentType, HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '../lib/cn';

export interface PageSectionProps
  extends PropsWithChildren<
    Omit<HTMLAttributes<HTMLElement>, 'children' | 'className'>
  > {
  /** Semantic element override, defaults to `section`. */
  readonly as?:
    | ComponentType<HTMLAttributes<HTMLElement>>
    | keyof React.JSX.IntrinsicElements;
  /** Unique identifier used for hash-based navigation. */
  readonly id: string;
  /** Additional class names merged with layout defaults. */
  readonly className?: string;
}

/**
 * Constrains section content to the page grid and applies consistent vertical rhythm.
 */
export const PageSection = ({
  as: Component = 'section',
  id,
  className,
  children,
  ...rest
}: PageSectionProps) => {
  const Comp: React.ElementType = Component;
  return (
    <Comp
      {...rest}
      className={cn('mx-auto w-full max-w-6xl px-6 py-16 sm:py-24', className)}
      id={id}
    >
      {children}
    </Comp>
  );
};
