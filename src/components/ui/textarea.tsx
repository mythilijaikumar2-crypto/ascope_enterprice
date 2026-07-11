import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, disabled, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-lg border bg-white px-3 py-2 text-sm text-neutral-800 transition-all duration-200 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-400",
          hasError
            ? "border-error focus:border-error focus:ring-error/30"
            : "border-border hover:border-neutral-300 focus:border-primary focus:ring-ring",
          className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
export default Textarea;
