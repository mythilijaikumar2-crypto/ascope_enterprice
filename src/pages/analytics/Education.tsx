import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { mockEnrollmentTrends } from '@/mocks/analytics-data';
import { DateRangeFilter } from '@/components/analytics/DateRangeFilter';
import { ExportReportButton } from '@/components/analytics/ExportReportButton';
import { EducationEnrollmentChart } from '@/components/analytics/EducationEnrollmentChart';
import SEOHead from '@/app/SEOHead';
import { cn } from '@/lib/utils';

export const EducationPage: React.FC = () => {
  const [dateRange, setDateRange] = useState<'last-7' | 'last-30'>('last-30');

  return (
    <>
      <SEOHead title="Academy Enrollment Analytics" description="Review monthly student intakes and job placement rates." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-6xl space-y-8 animate-in fade-in duration-300">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Academy Telemetry</span>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
                Education Analytics Console
              </h1>
              <p className="text-xs text-text-muted">Track monthly student intakes, course graduation rates, and job placements.</p>
            </div>
            
            {/* Filter and export actions */}
            <div className="flex flex-wrap items-center gap-3">
              <DateRangeFilter value={dateRange} onChange={setDateRange} />
              <ExportReportButton reportName={`Ascope-Academy-Analytics-${dateRange}`} />
            </div>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="border-b border-neutral-100 flex gap-6 overflow-x-auto text-xs font-bold uppercase tracking-wider pb-1">
            <NavLink
              to="/analytics/overview"
              className={({ isActive }) =>
                cn(
                  "pb-2 border-b-2 transition-all shrink-0",
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-neutral-400 hover:text-neutral-600"
                )
              }
            >
              Overview Overview
            </NavLink>
            <NavLink
              to="/analytics/hiring"
              className={({ isActive }) =>
                cn(
                  "pb-2 border-b-2 transition-all shrink-0",
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-neutral-400 hover:text-neutral-600"
                )
              }
            >
              Recruitment Funnel
            </NavLink>
            <NavLink
              to="/analytics/education"
              className={({ isActive }) =>
                cn(
                  "pb-2 border-b-2 transition-all shrink-0",
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-neutral-400 hover:text-neutral-600"
                )
              }
            >
              Academy Trends
            </NavLink>
            <NavLink
              to="/analytics/services"
              className={({ isActive }) =>
                cn(
                  "pb-2 border-b-2 transition-all shrink-0",
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-neutral-400 hover:text-neutral-600"
                )
              }
            >
              B2B Services Deliveries
            </NavLink>
          </div>

          {/* Main Chart Section */}
          <div className="max-w-3xl mx-auto">
            <EducationEnrollmentChart trendsData={mockEnrollmentTrends} />
          </div>

        </div>
      </div>
    </>
  );
};
export default EducationPage;
