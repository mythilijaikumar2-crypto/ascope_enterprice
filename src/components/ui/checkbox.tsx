import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  hasError?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, hasError, disabled, id, ...props }, ref) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;

    return (
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={checkboxId}
          className={cn(
            "h-4 w-4 rounded border bg-white text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            hasError
              ? "border-error focus:ring-error/30"
              : "border-border hover:border-neutral-300 focus:ring-ring",
            className
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        {label && (
          <label
            htmlFor={checkboxId}
            className={cn(
              "text-sm font-medium select-none cursor-pointer",
              disabled ? "text-neutral-400 cursor-not-allowed" : "text-neutral-700"
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";
export default Checkbox;
