import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded bg-neutral-200/85 relative overflow-hidden after:absolute after:inset-0 after:-translate-x-full after:bg-linear-to-r after:from-transparent after:via-white/20 after:to-transparent after:animate-shimmer",
        className
      )}
      {...props}
    />
  );
};

export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({
  lines = 3,
  className,
}) => {
  return (
    <div className={cn("space-y-2.5 w-full", className)}>
      {Array.from({ length: lines }).map((_, idx) => (
        <Skeleton
          key={idx}
          className={cn(
            "h-4 rounded",
            idx === lines - 1 && lines > 1 ? "w-[70%]" : "w-full"
          )}
        />
      ))}
    </div>
  );
};

export const SkeletonCard: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("p-6 border border-border rounded-2xl bg-white space-y-4 shadow-premium-sm", className)}>
      <div className="flex items-center gap-3">
        <Skeleton className="h-12 w-12 rounded-xl" />
        <div className="space-y-1.5 flex-1">
          <Skeleton className="h-4 w-1/3 rounded" />
          <Skeleton className="h-3 w-1/4 rounded" />
        </div>
      </div>
      <SkeletonText lines={2} />
      <div className="flex justify-between items-center pt-2">
        <Skeleton className="h-8 w-20 rounded-lg" />
        <Skeleton className="h-8 w-24 rounded-lg" />
      </div>
    </div>
  );
};

export const SkeletonTable: React.FC<{ rows?: number; cols?: number; className?: string }> = ({
  rows = 4,
  cols = 4,
  className,
}) => {
  return (
    <div className={cn("border border-border rounded-2xl overflow-hidden bg-white shadow-premium-sm", className)}>
      {/* Header Skeleton */}
      <div className="border-b border-border bg-surface px-6 py-4 flex gap-4">
        {Array.from({ length: cols }).map((_, idx) => (
          <Skeleton key={idx} className="h-4 flex-1 rounded" />
        ))}
      </div>
      {/* Rows Skeletons */}
      <div className="divide-y divide-neutral-100">
        {Array.from({ length: rows }).map((_, rIdx) => (
          <div key={rIdx} className="px-6 py-4 flex gap-4">
            {Array.from({ length: cols }).map((_, cIdx) => (
              <Skeleton key={cIdx} className="h-4 flex-1 rounded" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skeleton;
