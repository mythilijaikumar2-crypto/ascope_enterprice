import React from 'react';
import { mockCandidateApplications } from '@/mocks/candidate-applications';
import { DynamicPipelineIndicator } from '@/components/portal/DynamicPipelineIndicator';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowLeft, MapPin, Building2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/app/SEOHead';

export const ApplicationsPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Candidate Applications Tracker" description="Track the live status stepper progress of your submitted applications." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-4xl space-y-8 animate-in fade-in duration-300">
          
          {/* Back Nav */}
          <Link to="/portal/dashboard" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>

          {/* Title */}
          <div className="space-y-1">
            <h1 className="text-2xl font-display font-extrabold text-neutral-900 tracking-tight leading-snug">
              Applications Tracker
            </h1>
            <p className="text-xs text-text-muted">
              Review interview schedules and horizontal pipeline status tracks for active submissions.
            </p>
          </div>

          {/* Tracker list */}
          <div className="space-y-6">
            {mockCandidateApplications.map((app) => (
              <Card key={app.id}>
                <CardHeader className="border-b border-neutral-100 pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <CardTitle className="text-base font-bold text-neutral-900 tracking-tight">
                        {app.jobTitle}
                      </CardTitle>
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-text-muted font-medium">
                        <span className="flex items-center gap-1">
                          <Building2 className="h-3.5 w-3.5 text-neutral-400" />
                          {app.companyName}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-neutral-400" />
                          {app.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-neutral-400" />
                          Applied: {app.appliedDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {/* Status Indicator Stepper */}
                  <div className="space-y-2.5">
                    <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Application Pipeline Tracker</h4>
                    <DynamicPipelineIndicator currentStatus={app.status} />
                  </div>

                  {/* Actions Details */}
                  {app.nextAction && (
                    <div className="p-4 border border-primary/10 bg-primary-50/20 text-neutral-800 text-xs rounded-xl space-y-1 leading-relaxed">
                      <h4 className="font-bold text-primary">Interviews & Next Action Tasks</h4>
                      <p className="text-text-muted">{app.nextAction}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};
export default ApplicationsPage;
