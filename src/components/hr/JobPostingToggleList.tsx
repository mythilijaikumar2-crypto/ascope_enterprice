import React from 'react';
import { Switch, useToast } from '@/components/ui';
import type { Job } from '@/mocks/jobs';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface JobPostingToggleListProps {
  jobs: (Job & { status: 'Active' | 'Draft' })[];
  onToggleStatus: (id: string, nextStatus: 'Active' | 'Draft') => void;
}

export const JobPostingToggleList: React.FC<JobPostingToggleListProps> = ({
  jobs,
  onToggleStatus
}) => {
  const { toast } = useToast();

  const handleToggle = (id: string, currentStatus: 'Active' | 'Draft', title: string) => {
    const nextStatus = currentStatus === 'Active' ? 'Draft' : 'Active';
    onToggleStatus(id, nextStatus);
    toast({
      title: "Job Status Updated",
      description: `"${title}" has been updated to "${nextStatus}".`,
      variant: "success"
    });
  };

  return (
    <div className="space-y-4">
      {jobs.map((job) => {
        const isActive = job.status === 'Active';
        return (
          <Card key={job.id} className="hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-5 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border",
                      isActive
                        ? "bg-success-50 text-success border-success/15"
                        : "bg-neutral-100 text-neutral-400 border-neutral-200"
                    )}
                  >
                    {job.status}
                  </span>
                  <span className="text-[10px] text-text-light font-bold uppercase tracking-wider">
                    {job.department}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-neutral-800 tracking-tight leading-snug">
                  {job.title}
                </h4>
                <p className="text-[10px] text-text-muted mt-0.5">
                  {job.location} &bull; {job.mode}
                </p>
              </div>

              {/* Status Switch Toggle */}
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[10px] font-semibold text-neutral-500 hidden sm:inline-block">
                  {isActive ? "Active Listing" : "Draft Status"}
                </span>
                <Switch
                  checked={isActive}
                  onCheckedChange={() => handleToggle(job.id, job.status, job.title)}
                  className="h-5 w-9"
                  aria-label={`Toggle job posting status for ${job.title}`}
                />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
export default JobPostingToggleList;
