import React from 'react';
import { SolutionMatrixTable } from '@/components/services/SolutionMatrixTable';
import SEOHead from '@/app/SEOHead';
import { ShieldCheck, MessageSquare, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const SolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Consulting Solutions" description="Compare our corporate engagement tiers and B2B project support." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-5xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Engagement Models</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Corporate Support Tiers
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              Compare our flexible engagement models. We provide everything from single consulting engineers to complete agile scrum divisions.
            </p>
          </div>

          {/* Solutions Table */}
          <section className="pt-6">
            <SolutionMatrixTable />
          </section>

          {/* Core assurances cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
            <Card className="p-5 flex gap-3 text-xs bg-white">
              <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
              <div className="space-y-1">
                <h4 className="font-bold text-neutral-800">Strict IP Protection</h4>
                <p className="text-text-muted leading-relaxed">
                  All repositories, builds, documentation, and assets belong entirely to your company from day one.
                </p>
              </div>
            </Card>

            <Card className="p-5 flex gap-3 text-xs bg-white">
              <MessageSquare className="h-5 w-5 text-info shrink-0" />
              <div className="space-y-1">
                <h4 className="font-bold text-neutral-800">Direct Slack integrations</h4>
                <p className="text-text-muted leading-relaxed">
                  Engineers communicate directly inside shared communication channels, eliminating slow feedback loops.
                </p>
              </div>
            </Card>

            <Card className="p-5 flex gap-3 text-xs bg-white">
              <Briefcase className="h-5 w-5 text-success shrink-0" />
              <div className="space-y-1">
                <h4 className="font-bold text-neutral-800">Agile Standups & Boards</h4>
                <p className="text-text-muted leading-relaxed">
                  Consultants participate in weekly scrum boards, providing code clarity and operational transparency.
                </p>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </>
  );
};
export default SolutionsPage;
