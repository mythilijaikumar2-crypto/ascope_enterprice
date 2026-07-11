import React from 'react';
import SEOHead from '@/app/SEOHead';
import { Card } from '@/components/ui/card';
import { Award, ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export const InternshipsPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Student Internship Program" description="Apply for software consulting and cloud engineering internships at Ascope Tech." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-4xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Academy Linkages</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Student Internship Program
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              Bridge the gap between graduation and full-time employment by spending 12 weeks inside our active engineering squads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <Card className="p-6 space-y-3">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-base font-bold text-neutral-800 tracking-tight">Real Client Sprints</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Work directly under senior team leads on actual B2B software deliverables. No coffee-runs — pure code.
              </p>
            </Card>

            <Card className="p-6 space-y-3">
              <ShieldCheck className="h-6 w-6 text-success" />
              <h3 className="text-base font-bold text-neutral-800 tracking-tight">Dedicated Mentorship</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Receive weekly code review audits and systems deployment instructions directly from staff engineers.
              </p>
            </Card>

            <Card className="p-6 space-y-3">
              <TrendingUp className="h-6 w-6 text-info" />
              <h3 className="text-base font-bold text-neutral-800 tracking-tight">Conversion Funnel</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Over 80% of our student interns convert directly to full-time career listings upon graduation.
              </p>
            </Card>
          </div>

          <div className="p-6 border border-border bg-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-neutral-800">Ready to start?</h4>
              <p className="text-xs text-text-muted">Inquire about upcoming winter/summer internship cohorts.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-premium-sm">
              Inquire Program Details
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};
export default InternshipsPage;
