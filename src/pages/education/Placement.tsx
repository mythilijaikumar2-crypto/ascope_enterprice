import React from 'react';
import { PlacementStatsBanner } from '@/components/education/PlacementStatsBanner';
import SEOHead from '@/app/SEOHead';
import { Card } from '@/components/ui/card';
import { ShieldCheck, GraduationCap, TrendingUp } from 'lucide-react';

export const PlacementPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Placement Statistics" description="Understand graduation placement rates and salary growth stats." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-5xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Academy Placements</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Placement Statistics
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              Our placement funnel links graduates directly to hiring partners. Compare our career progression metrics below.
            </p>
          </div>

          {/* Placement stats graphs and companies list */}
          <section className="pt-6">
            <PlacementStatsBanner />
          </section>

          {/* Quick Metrics Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
            <Card className="p-5 flex gap-3 text-xs bg-white">
              <TrendingUp className="h-5 w-5 text-primary shrink-0" />
              <div className="space-y-1">
                <h4 className="font-bold text-neutral-800">95% Placement Rate</h4>
                <p className="text-text-muted leading-relaxed">
                  Of active job seekers are placed within 180 days of course completion.
                </p>
              </div>
            </Card>

            <Card className="p-5 flex gap-3 text-xs bg-white">
              <GraduationCap className="h-5 w-5 text-info shrink-0" />
              <div className="space-y-1">
                <h4 className="font-bold text-neutral-800">$93,000 Average Starting</h4>
                <p className="text-text-muted leading-relaxed">
                  Starting salary for our class of 2025 cohort graduates across US sites.
                </p>
              </div>
            </Card>

            <Card className="p-5 flex gap-3 text-xs bg-white">
              <ShieldCheck className="h-5 w-5 text-success shrink-0" />
              <div className="space-y-1">
                <h4 className="font-bold text-neutral-800">Direct Recruiter Matching</h4>
                <p className="text-text-muted leading-relaxed">
                  Our system matches candidates to open roles automatically, speeding up the process.
                </p>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </>
  );
};
export default PlacementPage;
