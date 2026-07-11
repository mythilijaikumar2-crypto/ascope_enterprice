import React, { useState } from 'react';
import { mockJobs } from '@/mocks/jobs';
import { JobPostingToggleList } from '@/components/hr/JobPostingToggleList';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui';
import SEOHead from '@/app/SEOHead';

// Combine mockJobs with an active state status field
const INITIAL_HR_JOBS = mockJobs.map((job, idx) => ({
  ...job,
  status: (idx % 2 === 0 ? 'Active' : 'Draft') as 'Active' | 'Draft'
}));

export const HRJobsPage: React.FC = () => {
  const [jobs, setJobs] = useState(INITIAL_HR_JOBS);

  const handleToggleStatus = (id: string, nextStatus: 'Active' | 'Draft') => {
    setJobs((prev) =>
      prev.map((job) => (job.id === id ? { ...job, status: nextStatus } : job))
    );
  };

  return (
    <>
      <SEOHead title="Manage Job Postings" description="Configure active or draft postings on the enterprise careers board." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-4xl space-y-8 animate-in fade-in duration-300">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Jobs Registry</span>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
                Job Postings Manager
              </h1>
              <p className="text-xs text-text-muted">Draft, activate, or archive career listings displayed on search boards.</p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => alert("Creating a new job posting wizard... (Simulated UI details)")}
                size="sm"
                className="flex items-center gap-1.5"
              >
                <Plus className="h-4 w-4" />
                Create Position
              </Button>
            </div>
          </div>

          {/* Job listings Switch panel */}
          <Card>
            <CardContent className="p-6">
              <JobPostingToggleList jobs={jobs} onToggleStatus={handleToggleStatus} />
            </CardContent>
          </Card>

        </div>
      </div>
    </>
  );
};
export default HRJobsPage;
