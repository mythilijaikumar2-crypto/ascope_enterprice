import React from 'react';
import { Cpu, Cloud, BrainCircuit, CheckCircle2 } from 'lucide-react';
import type { ServiceItem } from '@/mocks/services';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Map icon strings to components
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="h-6 w-6 text-primary" />;
      case 'Cloud':
        return <Cloud className="h-6 w-6 text-info" />;
      case 'BrainCircuit':
        return <BrainCircuit className="h-6 w-6 text-success" />;
      default:
        return <Cpu className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <Card className="hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
      <CardHeader className="space-y-4">
        <div className="p-3 bg-neutral-50 border border-neutral-100 rounded-2xl w-fit shadow-inner-soft">
          {renderIcon(service.icon)}
        </div>
        <div className="space-y-1.5">
          <CardTitle className="text-lg font-bold text-neutral-900 tracking-tight leading-snug">
            {service.title}
          </CardTitle>
          <CardDescription className="text-xs leading-relaxed">
            {service.shortDesc}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pt-1 border-t border-neutral-100/50 mt-4">
        <p className="text-[11px] text-text-muted leading-relaxed">
          {service.longDesc}
        </p>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-neutral-700 leading-relaxed">
              <CheckCircle2 className="h-4.5 w-4.5 text-success shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
export default ServiceCard;
