import React from 'react';
import { mockAdminUsers } from '@/mocks/admin-data';
import { UserManagementTable } from '@/components/admin/UserManagementTable';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/app/SEOHead';

export const UsersPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Manage System Users" description="Deactivate credentials, edit roles, or perform bulk user updates." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-5xl space-y-8 animate-in fade-in duration-300">
          
          {/* Back Nav */}
          <Link to="/admin/dashboard" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Admin Console
          </Link>

          {/* Title */}
          <div className="space-y-1">
            <h1 className="text-2xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
              User Management Directory
            </h1>
            <p className="text-xs text-text-muted">Perform bulk status changes or reassign HR and Recruiter operational roles.</p>
          </div>

          {/* User management bulk actions table */}
          <UserManagementTable initialUsers={mockAdminUsers} />

        </div>
      </div>
    </>
  );
};
export default UsersPage;
