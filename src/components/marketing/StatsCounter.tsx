import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface CounterProps {
  value: number;
  duration?: number; // duration in ms
}

const Counter: React.FC<CounterProps> = ({ value, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    let start = 0;
    const end = value;
    const totalSteps = 60; // 60fps
    const stepTime = duration / totalSteps;
    const increment = (end - start) / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration, prefersReducedMotion]);

  return <span ref={ref}>{count}</span>;
};

export interface StatsCounterProps {
  stats: {
    id: string;
    value: number;
    suffix: string;
    label: string;
    description: string;
  }[];
}

export const StatsCounter: React.FC<StatsCounterProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <div key={stat.id} className="text-center space-y-2 p-6 rounded-2xl bg-white border border-border/80 shadow-premium-sm hover:shadow-premium-md transition-all duration-300">
          <div className="text-3xl sm:text-5xl font-display font-extrabold text-primary tracking-tight">
            <Counter value={stat.value} />
            {stat.suffix}
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-neutral-800 tracking-tight">
              {stat.label}
            </h4>
            <p className="text-xs text-text-muted leading-relaxed">
              {stat.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default StatsCounter;
