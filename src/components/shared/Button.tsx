import type { ButtonHTMLAttributes, ElementType, ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import type { ButtonVariant, ControlSize } from '../../types';

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white border border-transparent hover:bg-primary-hover active:translate-y-px shadow-card',
  secondary:
    'bg-white text-ink border border-line hover:border-muted/40 hover:bg-canvas active:translate-y-px',
  danger:
    'bg-danger-soft text-danger border border-transparent hover:bg-danger hover:text-white active:translate-y-px',
  ghost: 'bg-transparent text-primary border border-transparent hover:bg-primary-soft',
  inverse:
    'bg-white/15 text-white border border-white/40 hover:bg-white/25 active:translate-y-px backdrop-blur-sm',
};

const SIZES: Record<ControlSize, string> = {
  sm: 'h-8 px-3 text-xs gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2.5',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: ElementType;
  variant?: ButtonVariant;
  size?: ControlSize;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  full?: boolean;
  children?: ReactNode;
}

export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  full = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center rounded-control font-semibold',
    'transition-colors duration-150 ease-out disabled:opacity-50 disabled:pointer-events-none',
    VARIANTS[variant],
    SIZES[size],
    full ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...props}>
      {Icon && iconPosition === 'left' ? <Icon size={16} strokeWidth={2} aria-hidden="true" /> : null}
      {children}
      {Icon && iconPosition === 'right' ? <Icon size={16} strokeWidth={2} aria-hidden="true" /> : null}
    </Tag>
  );
}
