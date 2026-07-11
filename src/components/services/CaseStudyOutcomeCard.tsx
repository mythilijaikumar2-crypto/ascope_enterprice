import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { CaseStudy } from '@/mocks/case-studies';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

export interface CaseStudyOutcomeCardProps {
  study: CaseStudy;
}

export const CaseStudyOutcomeCard: React.FC<CaseStudyOutcomeCardProps> = ({ study }) => {
  return (
    <Card className="flex flex-col justify-between group hover:border-primary/20 transition-all duration-300">
      <div>
        <CardHeader className="space-y-2">
          <div className="flex justify-between items-center gap-2">
            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-primary-50 border border-primary/20 text-primary uppercase tracking-wider">
              {study.category} Project
            </span>
            <span className="text-[10px] text-text-light font-medium">{study.clientName}</span>
          </div>
          <CardTitle className="text-base font-bold text-neutral-900 group-hover:text-primary transition-colors tracking-tight leading-snug">
            <Link to={`/case-studies/${study.slug}`}>
              {study.title}
            </Link>
          </CardTitle>
          <CardDescription className="line-clamp-2 leading-relaxed">
            {study.summary}
          </CardDescription>
        </CardHeader>

        {/* Metrics Spotlights */}
        <CardContent className="pt-2 border-t border-neutral-100/50 mt-4">
          <div className="grid grid-cols-3 gap-2 text-center bg-neutral-50/50 border border-neutral-100 p-2.5 rounded-xl">
            {study.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="font-display font-extrabold text-neutral-900 text-xs sm:text-sm block tracking-tight leading-none">
                  {metric.value}
                </span>
                <span className="text-[8px] text-text-light uppercase tracking-wider block font-bold leading-none">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </div>

      <CardFooter className="pt-0 flex justify-between items-center mt-4">
        <Link
          to={`/case-studies/${study.slug}`}
          className="text-xs font-semibold text-primary flex items-center gap-1 hover:text-primary-hover transition-colors"
        >
          Read Case Study
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardFooter>
    </Card>
  );
};
export default CaseStudyOutcomeCard;
