import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight } from 'lucide-react';
import type { CandidateApplication } from '@/mocks/candidate-applications';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface ApplicationTrackerListProps {
  applications: CandidateApplication[];
}

export const ApplicationTrackerList: React.FC<ApplicationTrackerListProps> = ({ applications }) => {
  // Mapping status to colors
  const statusColors = {
    Applied: "bg-neutral-100 text-neutral-600 border border-neutral-200",
    Screening: "bg-info-50 text-info border border-info/20",
    Interviewing: "bg-primary-50 text-primary border border-primary/20",
    Offered: "bg-success-50 text-success border border-success/20",
    Closed: "bg-error-50 text-error border border-error/20"
  };

  return (
    <div className="space-y-4">
      {applications.length === 0 ? (
        <div className="p-8 border border-dashed border-border rounded-2xl bg-white text-center text-xs text-text-light">
          You haven't submitted any job applications yet.
        </div>
      ) : (
        applications.map((app) => (
          <Card key={app.id} className="hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className={cn("text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider", statusColors[app.status])}>
                    {app.status}
                  </span>
                  <span className="text-[10px] text-text-light flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 shrink-0" />
                    Applied: {app.appliedDate}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 tracking-tight leading-snug">
                    {app.jobTitle}
                  </h4>
                  <p className="text-[11px] text-text-muted mt-0.5 leading-none">
                    {app.companyName} &bull; <span className="font-semibold">{app.location}</span>
                  </p>
                </div>
                {app.nextAction && (
                  <p className="text-[11px] text-primary font-medium leading-relaxed bg-primary-50/50 border border-primary-100/50 p-2 rounded-lg w-fit">
                    <strong>Next Action:</strong> {app.nextAction}
                  </p>
                )}
              </div>

              <Link
                to="/portal/applications"
                className="text-xs font-semibold text-primary flex items-center gap-1 hover:text-primary-hover transition-colors shrink-0"
              >
                Track application
                <ChevronRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};
export default ApplicationTrackerList;
