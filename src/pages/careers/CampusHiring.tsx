import React from 'react';
import SEOHead from '@/app/SEOHead';
import { Card } from '@/components/ui/card';
import { Landmark, Compass, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CampusHiringPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Campus Recruitment Programs" description="Learn about university coding contests and campus hiring paths at Ascope Tech." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-4xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">University Partner</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Campus Hiring Programs
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              We partner directly with leading university computer science departments to source top entry-level engineering talents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <Card className="p-6 space-y-3">
              <Landmark className="h-6 w-6 text-primary" />
              <h3 className="text-base font-bold text-neutral-800 tracking-tight">Campus Hackathons</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                We organize annual university hackathons, offering cash prizes and fast-track interview cards to top competitors.
              </p>
            </Card>

            <Card className="p-6 space-y-3">
              <Compass className="h-6 w-6 text-info" />
              <h3 className="text-base font-bold text-neutral-800 tracking-tight">Tech Presentations</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Our principal engineers host tech talks covering React 19 compiler architectures, Cloud IaC, and AI deployments.
              </p>
            </Card>

            <Card className="p-6 space-y-3">
              <Award className="h-6 w-6 text-success" />
              <h3 className="text-base font-bold text-neutral-800 tracking-tight">Associate Placement</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Graduate roles feature custom 6-month rotation models, helping fresh engineers find their best specialty.
              </p>
            </Card>
          </div>

          <div className="p-6 border border-border bg-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-neutral-800">University Placement Officers</h4>
              <p className="text-xs text-text-muted">Coordinate with our corporate recruitment team to establish university partner ties.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-premium-sm">
              Contact University Relations
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};
export default CampusHiringPage;
