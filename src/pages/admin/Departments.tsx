import React from 'react';
import { mockDepartmentTree } from '@/mocks/admin-data';
import { DepartmentTree } from '@/components/admin/DepartmentTree';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/app/SEOHead';

export const DepartmentsPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Configure Organization Tree" description="Manage recursive collapsible department nodes." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-3xl space-y-8 animate-in fade-in duration-300">
          
          {/* Back Nav */}
          <Link to="/admin/dashboard" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Admin Console
          </Link>

          {/* Title */}
          <div className="space-y-1">
            <h1 className="text-2xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
              Corporate Organization Registry
            </h1>
            <p className="text-xs text-text-muted">Maintain nested division labels and team alignments hierarchies.</p>
          </div>

          {/* Tree Component */}
          <DepartmentTree departments={mockDepartmentTree} />

        </div>
      </div>
    </>
  );
};
export default DepartmentsPage;
