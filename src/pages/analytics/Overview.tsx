import React, { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { mockAnalyticsKPIs, mockHiringFunnel } from '@/mocks/analytics-data';
import { KPICard } from '@/components/analytics/KPICard';
import { DateRangeFilter } from '@/components/analytics/DateRangeFilter';
import { ExportReportButton } from '@/components/analytics/ExportReportButton';
import { HiringFunnelChart } from '@/components/analytics/HiringFunnelChart';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import SEOHead from '@/app/SEOHead';
import { cn } from '@/lib/utils';

export const OverviewPage: React.FC = () => {
  const [dateRange, setDateRange] = useState<'last-7' | 'last-30'>('last-30');

  // Pull KPIs based on active date filter preset
  const kpis = useMemo(() => {
    return mockAnalyticsKPIs[dateRange] || [];
  }, [dateRange]);

  return (
    <>
      <SEOHead title="System Analytics Console" description="Centralized telemetry workspace tracking B2C academies, candidates pipelines, and enterprise systems stats." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-6xl space-y-8 animate-in fade-in duration-300">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Platform Telemetry</span>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
                System Analytics Console
              </h1>
              <p className="text-xs text-text-muted">Centralized monitoring hub checking operations across recruiting, education, and services.</p>
            </div>
            
            {/* Filter and export actions */}
            <div className="flex flex-wrap items-center gap-3">
              <DateRangeFilter value={dateRange} onChange={setDateRange} />
              <ExportReportButton reportName={`Ascope-System-Overview-${dateRange}`} />
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

          {/* KPI grid counts: 2-col mobile, 4-col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi) => (
              <KPICard
                key={kpi.id}
                label={kpi.label}
                value={typeof kpi.value === 'number' ? kpi.value : parseFloat(kpi.value)}
                change={kpi.change}
                isTrendPositive={kpi.isTrendPositive}
                period={kpi.period}
              />
            ))}
          </div>

          {/* Overview layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 pt-2">
            
            {/* Quick Chart summary */}
            <div className="lg:col-span-3">
              <HiringFunnelChart funnelData={mockHiringFunnel} />
            </div>

            {/* Quick Summary Cards */}
            <div className="lg:col-span-2 space-y-6 text-xs">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 border-b border-neutral-100 pb-2">
                    <Sparkles className="h-4.5 w-4.5 text-primary shrink-0" />
                    <h4 className="font-bold text-neutral-800">Operational Summary Insights</h4>
                  </div>
                  <ul className="space-y-3 leading-relaxed text-text-muted list-disc pl-4">
                    <li>
                      <strong>Weekly Recruitment:</strong> Candidate application rates indicate an upward trajectory of 12% following campaign promotions.
                    </li>
                    <li>
                      <strong>Academy Growth:</strong> Intake volumes remain consistent, with placements matching projected quarterly growth forecasts.
                    </li>
                    <li>
                      <strong>Enterprise Deliveries:</strong> B2B developer sprints tracking remains optimal across frontend and AI engineering categories.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
export default OverviewPage;
