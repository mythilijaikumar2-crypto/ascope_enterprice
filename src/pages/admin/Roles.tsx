import React from 'react';
import { RolePermissionMatrix } from '@/components/admin/RolePermissionMatrix';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/app/SEOHead';

export const RolesPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Configure System Roles" description="Map permissions to Admin, HR, and Recruiter credentials schemas." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-4xl space-y-8 animate-in fade-in duration-300">
          
          {/* Back Nav */}
          <Link to="/admin/dashboard" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Admin Console
          </Link>

          {/* Title */}
          <div className="space-y-1">
            <h1 className="text-2xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
              Roles & Permissions Configuration
            </h1>
            <p className="text-xs text-text-muted">Map privileges across operational groups using visual matrices.</p>
          </div>

          {/* Matrix Component */}
          <RolePermissionMatrix />

        </div>
      </div>
    </>
  );
};
export default RolesPage;
