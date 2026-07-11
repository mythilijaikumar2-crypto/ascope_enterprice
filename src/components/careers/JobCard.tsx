import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, DollarSign, Clock, ArrowRight } from 'lucide-react';
import type { Job } from '@/mocks/jobs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  // Map department to color tags
  const deptColors = {
    Engineering: "bg-primary-50 text-primary border border-primary/20",
    Design: "bg-info-50 text-info border border-info/20",
    Product: "bg-success-50 text-success border border-success/20",
    Marketing: "bg-amber-50 text-amber-500 border border-amber-500/20"
  };

  return (
    <Card className="flex flex-col justify-between h-full group hover:border-primary/20 transition-all duration-300">
      <div>
        <CardHeader className="space-y-2">
          {/* Badges bar */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className={cn("text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider", deptColors[job.department])}>
              {job.department}
            </span>
            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600 uppercase tracking-wider flex items-center gap-1">
              <Briefcase className="h-3 w-3 shrink-0" />
              {job.experienceLevel}
            </span>
            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600 uppercase tracking-wider flex items-center gap-1">
              <Clock className="h-3 w-3 shrink-0" />
              {job.mode}
            </span>
          </div>

          <CardTitle className="text-base font-bold text-neutral-900 group-hover:text-primary transition-colors tracking-tight leading-snug">
            <Link to={`/careers/jobs/${job.slug}`}>
              {job.title}
            </Link>
          </CardTitle>
          <CardDescription className="line-clamp-2 leading-relaxed">
            {job.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-2 text-xs pt-1">
          {/* Location & Salary */}
          <div className="flex items-center gap-1.5 text-neutral-500">
            <MapPin className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-500">
            <DollarSign className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
            <span>{job.salaryRange}</span>
          </div>
        </CardContent>
      </div>

      <CardFooter className="pt-0 flex justify-between items-center mt-4">
        <Link
          to={`/careers/jobs/${job.slug}`}
          className="text-xs font-semibold text-primary flex items-center gap-1 hover:text-primary-hover transition-colors"
        >
          View Details
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardFooter>
    </Card>
  );
};
export default JobCard;
