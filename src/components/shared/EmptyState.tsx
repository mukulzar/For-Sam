import { Compass } from 'lucide-react';
import Button from './Button';

export interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <section className="surface-card mx-auto flex max-w-xl flex-col items-center gap-4 p-12 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary">
        <Compass size={22} aria-hidden="true" />
      </span>
      <h2 className="text-h3">{title}</h2>
      <p className="max-w-sm">{description}</p>
      {actionLabel ? <Button onClick={onAction}>{actionLabel}</Button> : null}
    </section>
  );
}
