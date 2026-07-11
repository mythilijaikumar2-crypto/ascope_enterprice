import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export interface KPICardProps {
  label: string;
  value: number;
  change: number;
  isTrendPositive: boolean;
  period: string;
}

export const KPICard: React.FC<KPICardProps> = ({
  label,
  value,
  change,
  isTrendPositive,
  period
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [animatedValue, setAnimatedValue] = useState(0);

  // Counter animation on load / prop change
  useEffect(() => {
    if (prefersReducedMotion) {
      setAnimatedValue(value);
      return;
    }
    const duration = 800;
    const intervalTime = 20;
    const stepsCount = duration / intervalTime;
    const stepValue = value / stepsCount;

    setAnimatedValue(0);
    const timer = setInterval(() => {
      setAnimatedValue((prev) => {
        if (prev >= value) {
          clearInterval(timer);
          return value;
        }
        return prev + stepValue;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [value, prefersReducedMotion]);

  const changeAbs = Math.abs(change);

  return (
    <Card className="hover:border-primary/20 transition-all duration-300">
      <CardContent className="p-6 space-y-2">
        <span className="text-[10px] text-text-light font-bold uppercase tracking-wider block">
          {label}
        </span>
        
        <div className="flex items-baseline justify-between">
          <h3 className="font-display font-extrabold text-neutral-900 text-3xl tracking-tight leading-none">
            {animatedValue.toFixed(0)}
          </h3>

          {/* Trend indicators with screen reader text */}
          <div className="flex items-center gap-1 text-xs">
            {isTrendPositive ? (
              <div className="flex items-center gap-0.5 text-success font-bold" aria-label={`Increased by ${changeAbs}%`}>
                <TrendingUp className="h-4 w-4 shrink-0" />
                <span>+{changeAbs}%</span>
              </div>
            ) : (
              <div className="flex items-center gap-0.5 text-error font-bold" aria-label={`Decreased by ${changeAbs}%`}>
                <TrendingDown className="h-4 w-4 shrink-0" />
                <span>-{changeAbs}%</span>
              </div>
            )}
          </div>
        </div>

        <p className="text-[10px] text-text-muted leading-none">
          {period} &bull; <span className="sr-only">Trend indicates it has </span>
          {isTrendPositive ? "increased" : "decreased"} {changeAbs}% compared to previous timeframe.
        </p>
      </CardContent>
    </Card>
  );
};
export default KPICard;
