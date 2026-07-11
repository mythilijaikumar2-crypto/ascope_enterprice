import React from 'react';
import { PipelineMetricsCard } from '@/components/hr/PipelineMetricsCard';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { mockCandidates } from '@/mocks/candidates';
import { Eye, ClipboardList, Send, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/app/SEOHead';

export const RecruiterDashboardPage: React.FC = () => {
  // Candidate pool splits
  const screeningCount = mockCandidates.filter((c) => c.status === 'Screening').length;
  const interviewingCount = mockCandidates.filter((c) => c.status === 'Interviewing').length;
  const offeredCount = mockCandidates.filter((c) => c.status === 'Offered').length;

  return (
    <>
      <SEOHead title="Recruiter Dashboard" description="Coordinate candidate pools, track screening processes, and schedules." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-6xl space-y-8 animate-in fade-in duration-300">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Recruitment Squads</span>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
                Recruiter Workspace
              </h1>
              <p className="text-xs text-text-muted">Coordinate applicant pipelines, phone screens, and interview blocks.</p>
            </div>
            <div className="flex gap-2">
              <Link to="/hr/dashboard" className="inline-flex items-center justify-center bg-white hover:bg-neutral-50 text-neutral-700 text-xs font-semibold py-2 px-3 border border-border rounded-xl shadow-premium-sm transition-all gap-1">
                HR Admin View
              </Link>
            </div>
          </div>

          {/* Metrics splits cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <PipelineMetricsCard
              title="Screening Pools"
              value={screeningCount}
              description="Candidates in portfolio review stages"
              icon={<ClipboardList className="h-5 w-5" />}
              colorClass="text-info bg-info-50/50"
            />
            <PipelineMetricsCard
              title="Active Interviews"
              value={interviewingCount}
              description="Candidates scheduled for active panels"
              icon={<Calendar className="h-5 w-5" />}
              colorClass="text-primary bg-primary-50/50"
            />
            <PipelineMetricsCard
              title="Offer Stages"
              value={offeredCount}
              description="Candidates with issued contract offers"
              icon={<Send className="h-5 w-5" />}
              colorClass="text-success bg-success-50/50"
            />
          </div>

          {/* Recruiter Roster panel */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-4">
              <div>
                <CardTitle>Roster Overview</CardTitle>
                <CardDescription>Recently active candidate tracking profiles details.</CardDescription>
              </div>
              <Link to="/hr/candidates" className="text-xs font-bold text-primary hover:text-primary-hover">
                View Candidate Directory
              </Link>
            </CardHeader>
            <CardContent className="space-y-3.5">
              {mockCandidates.slice(0, 4).map((cand) => (
                <div
                  key={cand.id}
                  className="p-4 border border-border bg-white rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-primary/20 transition-all duration-300 shadow-premium-sm"
                >
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-neutral-800 leading-snug">
                      {cand.name} &bull; <span className="text-[10px] text-text-light font-semibold">{cand.title}</span>
                    </h4>
                    <p className="text-[10px] text-text-muted mt-0.5">
                      Applied: {cand.appliedDate} &bull; Dept: <span className="font-semibold text-neutral-700">{cand.department}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-primary-50 text-primary border border-primary/20 uppercase tracking-wider">
                      {cand.status}
                    </span>
                    <Link
                      to={`/hr/candidates/${cand.id}`}
                      className="p-2 border border-border hover:border-primary/20 hover:bg-primary-50/10 text-neutral-400 hover:text-primary rounded-xl transition-all"
                      aria-label={`View details of ${cand.name}`}
                    >
                      <Eye className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

        </div>
      </div>
    </>
  );
};
export default RecruiterDashboardPage;
