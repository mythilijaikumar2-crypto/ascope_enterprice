import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import type { Certification } from '@/mocks/certifications';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export interface CertificationBadgeGridProps {
  certifications: Certification[];
}

export const CertificationBadgeGrid: React.FC<CertificationBadgeGridProps> = ({ certifications }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {certifications.map((cert) => (
        <Card key={cert.id} className="flex flex-col justify-between">
          <CardHeader className="space-y-3">
            {/* Badge Icon */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-display font-extrabold text-base shadow-inner-soft">
                {cert.badgeUrl}
              </div>
              <div>
                <CardTitle className="text-sm font-bold text-neutral-900 tracking-tight leading-snug">
                  {cert.name}
                </CardTitle>
                <span className="text-[9px] font-bold text-neutral-400 border border-border px-1.5 py-0.5 rounded uppercase mt-1 inline-block">
                  {cert.code}
                </span>
              </div>
            </div>
            
            <CardDescription className="text-xs leading-relaxed">
              {cert.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="border-t border-neutral-100/50 pt-4 mt-2">
            <h5 className="text-[10px] font-bold text-neutral-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-primary shrink-0" />
              Requirements
            </h5>
            <ul className="space-y-1.5 text-[11px] text-text-muted">
              {cert.requirements.map((req, rIdx) => (
                <li key={rIdx} className="flex items-start gap-1.5 leading-relaxed">
                  <CheckCircle className="h-3.5 w-3.5 text-success shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default CertificationBadgeGrid;
