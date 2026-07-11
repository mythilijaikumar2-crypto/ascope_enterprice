import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
  options?: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, hasError, options, children, disabled, ...props }, ref) => {
    return (
      <select
        className={cn(
          "flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm text-neutral-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-400",
          hasError
            ? "border-error focus:border-error focus:ring-error/30"
            : "border-border hover:border-neutral-300 focus:border-primary focus:ring-ring",
          className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children
          ? children
          : options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
      </select>
    );
  }
);
Select.displayName = "Select";
export default Select;
