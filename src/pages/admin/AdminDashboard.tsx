import React from 'react';
import { AdminDashboardCards } from '@/components/admin/AdminDashboardCards';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ShieldCheck, Users, Settings, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/app/SEOHead';

export const AdminDashboardPage: React.FC = () => {
  return (
    <>
      <SEOHead title="System Admin Dashboard" description="Access system configurations, user tables, and departments hierarchies." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-6xl space-y-8 animate-in fade-in duration-300">
          
          {/* Header */}
          <div className="space-y-1">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">System Control Center</span>
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
              HR Administration Console
            </h1>
            <p className="text-xs text-text-muted">Manage company settings, active user credentials, and master skills datasets.</p>
          </div>

          {/* Telemetry metrics cards */}
          <AdminDashboardCards />

          {/* Configuration Panel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            
            {/* Quick Links Menu */}
            <Card>
              <CardHeader>
                <CardTitle>Master Config Files</CardTitle>
                <CardDescription>Adjust variables configuring user registries and scopes.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3.5 text-xs">
                
                <Link to="/admin/users" className="flex items-center justify-between p-3 border border-border bg-white rounded-xl hover:border-primary/20 transition-all duration-300 shadow-premium-sm group">
                  <div className="flex items-center gap-2.5">
                    <Users className="h-4.5 w-4.5 text-neutral-400" />
                    <div>
                      <span className="font-bold text-neutral-800 block">User Management</span>
                      <p className="text-[10px] text-text-light mt-0.5">Invite staff members, assign credentials, or perform bulk status actions.</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>

                <Link to="/admin/roles" className="flex items-center justify-between p-3 border border-border bg-white rounded-xl hover:border-primary/20 transition-all duration-300 shadow-premium-sm group">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="h-4.5 w-4.5 text-neutral-400" />
                    <div>
                      <span className="font-bold text-neutral-800 block">Permissions Matrix</span>
                      <p className="text-[10px] text-text-light mt-0.5">Configure role privileges checkboxes grids for HR administrators.</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>

                <Link to="/admin/departments" className="flex items-center justify-between p-3 border border-border bg-white rounded-xl hover:border-primary/20 transition-all duration-300 shadow-premium-sm group">
                  <div className="flex items-center gap-2.5">
                    <Database className="h-4.5 w-4.5 text-neutral-400" />
                    <div>
                      <span className="font-bold text-neutral-800 block">Organization Trees</span>
                      <p className="text-[10px] text-text-light mt-0.5">Define corporate divisions hierarchies with recursive collapsible nodes.</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>

              </CardContent>
            </Card>

            {/* Quick stats / disclaimer */}
            <Card className="bg-neutral-50/50 border-dashed">
              <CardContent className="p-6 space-y-4 text-xs leading-relaxed">
                <div className="flex items-center gap-2 border-b border-neutral-100 pb-2">
                  <Settings className="h-4.5 w-4.5 text-primary shrink-0" />
                  <h4 className="font-bold text-neutral-800">Admin Control Log</h4>
                </div>
                <p className="text-text-muted">
                  System administrators govern data storage schedules, machine-learning assessment flags, and corporate divisions variables.
                </p>
                <p className="text-text-muted">
                  Edits made inside these admin control screens immediately modify candidate skills suggestions lists, HR scheduler calendars, and datatable filtering categories.
                </p>
                <div className="pt-2">
                  <Link to="/admin/settings" className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-premium-sm">
                    Configure System Settings
                  </Link>
                </div>
              </CardContent>
            </Card>

          </div>

        </div>
      </div>
    </>
  );
};
export default AdminDashboardPage;
