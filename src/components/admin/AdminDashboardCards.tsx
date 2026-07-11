import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, HardDrive, Users, Activity } from 'lucide-react';

export const AdminDashboardCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {/* CPU Load */}
      <Card className="hover:border-primary/20 transition-all duration-300">
        <CardContent className="p-6 flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] text-text-light font-bold uppercase tracking-wider block">
              CPU Utilization
            </span>
            <h3 className="font-display font-extrabold text-neutral-900 text-2xl tracking-tight leading-none">
              45%
            </h3>
            <p className="text-[10px] text-success font-semibold">
              &bull; Healthy Telemetry
            </p>
          </div>
          <div className="p-3 rounded-2xl bg-teal-50 border border-teal-100 text-primary shrink-0 shadow-inner-soft">
            <Cpu className="h-5 w-5" />
          </div>
        </CardContent>
      </Card>

      {/* Memory Load */}
      <Card className="hover:border-primary/20 transition-all duration-300">
        <CardContent className="p-6 flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] text-text-light font-bold uppercase tracking-wider block">
              Memory Allocation
            </span>
            <h3 className="font-display font-extrabold text-neutral-900 text-2xl tracking-tight leading-none">
              65%
            </h3>
            <p className="text-[10px] text-success font-semibold">
              &bull; 5.2 GB Allocated
            </p>
          </div>
          <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 text-info shrink-0 shadow-inner-soft">
            <HardDrive className="h-5 w-5" />
          </div>
        </CardContent>
      </Card>

      {/* Active Users */}
      <Card className="hover:border-primary/20 transition-all duration-300">
        <CardContent className="p-6 flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] text-text-light font-bold uppercase tracking-wider block">
              Active Sessions
            </span>
            <h3 className="font-display font-extrabold text-neutral-900 text-2xl tracking-tight leading-none">
              87
            </h3>
            <p className="text-[10px] text-success font-semibold">
              &bull; Live browser connections
            </p>
          </div>
          <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-100 text-success shrink-0 shadow-inner-soft">
            <Users className="h-5 w-5" />
          </div>
        </CardContent>
      </Card>

      {/* Platform Logs */}
      <Card className="hover:border-primary/20 transition-all duration-300">
        <CardContent className="p-6 flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] text-text-light font-bold uppercase tracking-wider block">
              System Logs
            </span>
            <h3 className="font-display font-extrabold text-neutral-900 text-2xl tracking-tight leading-none">
              Online
            </h3>
            <p className="text-[10px] text-success font-semibold">
              &bull; Zero service alerts
            </p>
          </div>
          <div className="p-3 rounded-2xl bg-amber-50 border border-amber-100 text-amber-500 shrink-0 shadow-inner-soft">
            <Activity className="h-5 w-5" />
          </div>
        </CardContent>
      </Card>

    </div>
  );
};
export default AdminDashboardCards;
