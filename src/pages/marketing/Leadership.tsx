import React from 'react';
import { mockLeadership } from '@/mocks/leadership';
import { LeadershipCard } from '@/components/marketing/LeadershipCard';
import SEOHead from '@/app/SEOHead';

export const LeadershipPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Leadership Team" description="Meet the executive board and division leads behind Ascope Tech platforms." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-4xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Executive Board</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Leadership Team
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-lg mx-auto">
              Driven by engineers, educators, and recruiters committed to building high-quality software platforms and student opportunities.
            </p>
          </div>

          {/* Leaders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            {mockLeadership.map((member) => (
              <LeadershipCard key={member.name} member={member} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
};
export default LeadershipPage;
