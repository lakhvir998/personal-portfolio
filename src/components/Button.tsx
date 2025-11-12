import { forwardRef, type ReactNode, type Ref } from 'react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cn } from '../lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'md' | 'lg';

interface ButtonCommonProps {
  /** Visual treatment for the button. */
  readonly variant?: ButtonVariant;
  /** Padding scale for the control. */
  readonly size?: ButtonSize;
  /** Optional decorative or directional icon. */
  readonly icon?: ReactNode;
  /** Preferred icon placement relative to the label. */
  readonly iconPosition?: 'left' | 'right';
  /** Button label. */
  readonly children: ReactNode;
  /** Additional style classes merged with the defaults. */
  readonly className?: string;
}

type AnchorButtonProps = ButtonCommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonCommonProps> & {
    /** Destination URL when the control is rendered as a link. */
    readonly href: string;
  };

type NativeButtonProps = ButtonCommonProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof ButtonCommonProps | 'href'
  >;

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[rgb(var(--color-accent)/1)] text-[rgb(var(--color-accent-foreground)/1)] shadow-[0_10px_40px_rgb(var(--color-accent)/0.28)] hover:bg-[rgb(var(--color-accent)/0.92)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--color-accent)/1)]',
  secondary:
    'bg-[rgb(var(--color-card)/1)] text-[rgb(var(--color-foreground)/1)] border border-white/10 hover:border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40',
  ghost:
    'text-[rgb(var(--color-foreground)/1)] hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30',
};

const sizeStyles: Record<ButtonSize, string> = {
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

const iconSpacing: Record<'left' | 'right', string> = {
  left: 'gap-2',
  right: 'gap-2 flex-row-reverse',
};

const isAnchor = (props: ButtonProps): props is AnchorButtonProps =>
  'href' in props && typeof props.href === 'string';

/**
 * Polymorphic button that renders either a semantic button or link while applying shared styling tokens.
 */
export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  const {
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    children,
    className,
    ...rest
  } = props;

  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-full font-medium tracking-tight transition duration-200',
    iconSpacing[iconPosition],
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (isAnchor(props)) {
    const { href, target, rel, ...anchorRest } = rest as AnchorButtonProps;
    const resolvedTarget =
      target ?? (href.startsWith('#') ? undefined : '_blank');
    const resolvedRel =
      rel ?? (resolvedTarget === '_blank' ? 'noopener noreferrer' : undefined);
    return (
      <a
        ref={ref as Ref<HTMLAnchorElement>}
        className={baseClasses}
        href={href}
        rel={resolvedRel}
        target={resolvedTarget}
        {...anchorRest}
      >
        {icon}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      className={baseClasses}
      type='button'
      {...(rest as NativeButtonProps)}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
});

Button.displayName = 'Button';
