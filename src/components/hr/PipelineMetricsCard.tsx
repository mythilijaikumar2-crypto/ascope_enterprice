import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface PipelineMetricsCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  colorClass?: string;
}

export const PipelineMetricsCard: React.FC<PipelineMetricsCardProps> = ({
  title,
  value,
  description,
  icon,
  colorClass
}) => {
  return (
    <Card className="hover:border-primary/20 transition-all duration-300">
      <CardContent className="p-6 flex items-center justify-between">
        <div className="space-y-1">
          <span className="text-[10px] text-text-light font-bold uppercase tracking-wider block">
            {title}
          </span>
          <h3 className="font-display font-extrabold text-neutral-900 text-2xl tracking-tight leading-none">
            {value}
          </h3>
          <p className="text-[10px] text-text-muted leading-relaxed">
            {description}
          </p>
        </div>
        <div className={cn("p-3 rounded-2xl bg-neutral-50 border border-neutral-100 text-neutral-500 shadow-inner-soft shrink-0", colorClass)}>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};
export default PipelineMetricsCard;
