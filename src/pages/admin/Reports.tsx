import React from 'react';
import { AdminReportGrid } from '@/components/admin/AdminReportGrid';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/app/SEOHead';

export const ReportsPage: React.FC = () => {
  return (
    <>
      <SEOHead title="System Reports" description="Telemetry charts of platform CPU load and active user sessions." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-6xl space-y-8 animate-in fade-in duration-300">
          
          {/* Back Nav */}
          <Link to="/admin/dashboard" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Admin Console
          </Link>

          {/* Title */}
          <div className="space-y-1">
            <h1 className="text-2xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
              System Telemetry Reports
            </h1>
            <p className="text-xs text-text-muted">Review concurrent browser sessions and CPU/memory allocation graphs.</p>
          </div>

          {/* Report charts grid component */}
          <AdminReportGrid />

        </div>
      </div>
    </>
  );
};
export default ReportsPage;
