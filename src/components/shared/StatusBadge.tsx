import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import type { BadgeTone } from '../../types';

const TONES: Record<BadgeTone, string> = {
  active: 'bg-success/10 text-success',
  success: 'bg-success/10 text-success',
  warning: 'bg-warning/10 text-warning',
  failed: 'bg-danger/10 text-danger',
  danger: 'bg-danger/10 text-danger',
  info: 'bg-primary/10 text-primary',
  pending: 'bg-primary/10 text-primary',
  neutral: 'bg-ink/5 text-muted',
  onDark: 'bg-white/20 text-white',
  onDarkWarning: 'bg-warning/25 text-warning',
};

const SIZES: Record<'sm' | 'md', string> = {
  sm: 'h-5 px-2 text-[11px]',
  md: 'h-6 px-2.5 text-xs',
};

export interface StatusBadgeProps {
  tone?: BadgeTone;
  size?: 'sm' | 'md';
  icon?: LucideIcon;
  className?: string;
  children: ReactNode;
}

export default function StatusBadge({
  tone = 'neutral',
  size = 'md',
  icon: Icon,
  className = '',
  children,
}: StatusBadgeProps) {
  const classes = [
    'inline-flex items-center gap-1 rounded-full font-semibold whitespace-nowrap',
    TONES[tone] ?? TONES.neutral,
    SIZES[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes}>
      {Icon ? <Icon size={12} strokeWidth={2.5} aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
