import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertOctagon, AlertTriangle, Info } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastContextProps {
  toast: (item: Omit<ToastItem, 'id'>) => void;
  removeToast: (id: string) => void;
  toasts: ToastItem[];
}

const ToastContext = React.createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  const toast = React.useCallback(({ duration = 5000, ...rest }: Omit<ToastItem, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, duration, ...rest }]);
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast, removeToast, toasts }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

interface ToastContainerProps {
  toasts: ToastItem[];
  removeToast: (id: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, removeToast }) => {
  return (
    <div
      className="fixed top-4 right-4 z-toast flex flex-col gap-3 w-full max-w-[90vw] sm:max-w-sm pointer-events-none"
      role="live"
      aria-live="polite"
    >
      <AnimatePresence>
        {toasts.map((item) => (
          <Toast key={item.id} item={item} onDismiss={() => removeToast(item.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
};

interface ToastProps {
  item: ToastItem;
  onDismiss: () => void;
}

const Toast: React.FC<ToastProps> = ({ item, onDismiss }) => {
  const { title, description, variant = 'info', duration = 5000 } = item;
  const prefersReducedMotion = useReducedMotion();
  const [progress, setProgress] = React.useState(100);

  // Auto dismiss timer
  React.useEffect(() => {
    if (duration === Infinity) return;
    const interval = 10;
    const step = (interval / duration) * 100;
    
    const timer = setTimeout(() => {
      onDismiss();
    }, duration);

    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.max(0, prev - step));
    }, interval);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, [duration, onDismiss]);

  const renderIcon = () => {
    switch (variant) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-success" />;
      case 'error':
        return <AlertOctagon className="h-5 w-5 text-error" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-warning" />;
      case 'info':
      default:
        return <Info className="h-5 w-5 text-info" />;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 50, y: prefersReducedMotion ? -10 : 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: prefersReducedMotion ? 0 : 50, scale: 0.95 }}
      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      className={cn(
        "pointer-events-auto relative overflow-hidden flex items-start gap-3 rounded-xl border bg-white p-4 shadow-premium-lg border-border",
        variant === 'success' && "border-success/20 bg-success-50/5",
        variant === 'error' && "border-error/20 bg-error-50/5",
        variant === 'warning' && "border-warning/20 bg-warning-50/5",
        variant === 'info' && "border-info/20 bg-info-50/5"
      )}
    >
      {/* Icon */}
      <div className="shrink-0 pt-0.5">{renderIcon()}</div>

      {/* Text Content */}
      <div className="flex-1 space-y-1 pr-4">
        <h4 className="text-xs font-bold text-neutral-800 tracking-tight leading-snug">
          {title}
        </h4>
        {description && (
          <p className="text-[11px] text-text-muted leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Dismiss Button */}
      <button
        onClick={onDismiss}
        className="shrink-0 p-1 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Dismiss notification"
      >
        <X className="h-4 w-4" />
      </button>

      {/* Progress Bar indicator */}
      {duration !== Infinity && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-100">
          <div
            className={cn(
              "h-full transition-all duration-10 ease-linear",
              variant === 'success' && "bg-success",
              variant === 'error' && "bg-error",
              variant === 'warning' && "bg-warning",
              variant === 'info' && "bg-info"
            )}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </motion.div>
  );
};
