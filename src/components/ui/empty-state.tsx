import * as React from 'react';
import { Button } from './button';
import { Inbox } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  actionText,
  onAction,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-8 rounded-2xl border border-dashed border-border bg-surface/30 space-y-4 max-w-sm mx-auto",
        className
      )}
    >
      {/* Icon Area */}
      <div className="p-3 bg-surface border border-border text-neutral-400 rounded-2xl shadow-premium-sm">
        {icon || <Inbox className="h-8 w-8" />}
      </div>

      {/* Info Area */}
      <div className="space-y-1.5">
        <h3 className="text-sm font-bold text-neutral-800 tracking-tight">
          {title}
        </h3>
        <p className="text-xs text-text-muted leading-relaxed">
          {description}
        </p>
      </div>

      {/* Action Area */}
      {actionText && onAction && (
        <Button onClick={onAction} size="sm" variant="secondary" className="mt-2 text-xs">
          {actionText}
        </Button>
      )}
    </div>
  );
};
export default EmptyState;
