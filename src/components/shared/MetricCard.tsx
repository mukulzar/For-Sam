import type { ReactNode } from 'react';
import type { Tone } from '../../types';

export interface MetricCardProps {
  label: string;
  value: string;
  hint?: string;
  hintTone?: 'muted' | 'success' | 'warning' | 'danger';
  trailing?: ReactNode;
}

export default function MetricCard({
  label,
  value,
  hint,
  hintTone = 'muted',
  trailing,
}: MetricCardProps) {
  const hintClass: Record<NonNullable<MetricCardProps['hintTone']>, string> = {
    muted: 'text-muted',
    success: 'text-success',
    warning: 'text-warning',
    danger: 'text-danger',
  };

  return (
    <article className="surface-card flex flex-col gap-3 p-5">
      <h3 className="text-sm font-semibold text-ink">{label}</h3>
      <div className="flex items-center justify-between gap-3">
        <p className="text-h2 font-extrabold tracking-tight text-ink">{value}</p>
        {trailing}
      </div>
      {hint ? <p className={`text-xs ${hintClass[hintTone]}`}>{hint}</p> : null}
    </article>
  );
}

export interface ProgressRingProps {
  value: number;
  size?: number;
  stroke?: number;
}

export function ProgressRing({ value, size = 44, stroke = 4 }: ProgressRingProps) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(Math.max(value, 0), 100) / 100) * circumference;

  return (
    <svg width={size} height={size} role="img" aria-label={`${value} percent complete`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#E2E8F0"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#4F46E5"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

export interface ProgressBarProps {
  value: number;
  tone?: Tone;
  className?: string;
}

export function ProgressBar({ value, tone = 'primary', className = '' }: ProgressBarProps) {
  const fill: Record<Tone, string> = {
    primary: 'bg-primary',
    success: 'bg-success',
    warning: 'bg-warning',
    danger: 'bg-danger',
  };

  return (
    <div
      className={`h-1.5 w-full overflow-hidden rounded-full bg-line ${className}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className={`h-full rounded-full ${fill[tone]}`} style={{ width: `${value}%` }} />
    </div>
  );
}
