import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { mockApplicationTrends, mockDepartmentRatios } from '@/mocks/hr-metrics';
import { PipelineMetricsCard } from '@/components/hr/PipelineMetricsCard';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Briefcase, Users, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/app/SEOHead';

const COLORS = ['#0f766e', '#0284c7', '#16a34a', '#d97706'];

export const HRDashboardPage: React.FC = () => {
  return (
    <>
      <SEOHead title="HR Admin Dashboard" description="Review recruiting funnels, application metrics, and active pipelines." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-6xl space-y-8 animate-in fade-in duration-300">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Enterprise HR Workspace</span>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
                HR Pipeline Dashboard
              </h1>
              <p className="text-xs text-text-muted">Review organizational trends and recruiting progress metrics.</p>
            </div>
            <div className="flex gap-2">
              <Link to="/recruiter/dashboard" className="inline-flex items-center justify-center bg-white hover:bg-neutral-50 text-neutral-700 text-xs font-semibold py-2 px-3 border border-border rounded-xl shadow-premium-sm transition-all gap-1">
                Recruiter View
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Metrics summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <PipelineMetricsCard
              title="Active Positions"
              value="12"
              description="Open job roles listed on careers board"
              icon={<Briefcase className="h-5 w-5" />}
              colorClass="text-primary bg-primary-50/50"
            />
            <PipelineMetricsCard
              title="Total Applicants"
              value="87"
              description="Candidate entries across vector index"
              icon={<Users className="h-5 w-5" />}
              colorClass="text-info bg-info-50/50"
            />
            <PipelineMetricsCard
              title="Interviews Today"
              value="4"
              description="Confirmed panels scheduled on calendar"
              icon={<Calendar className="h-5 w-5" />}
              colorClass="text-success bg-success-50/50"
            />
          </div>

          {/* Charts grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* Trends line chart */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Application Growth Trends</CardTitle>
                <CardDescription>Daily candidate submissions counts over past 30 days.</CardDescription>
              </CardHeader>
              <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockApplicationTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="date" stroke="#94a3b8" fontSize={9} tickLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={9} tickLine={false} />
                    <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', fontSize: '10px' }} />
                    <Line type="monotone" dataKey="count" stroke="#0f766e" strokeWidth={2} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Department ratios pie */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Applicants by Department</CardTitle>
                <CardDescription>Ratios comparison across organization divisions.</CardDescription>
              </CardHeader>
              <CardContent className="h-64 flex flex-col justify-between">
                <div className="flex-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={mockDepartmentRatios}
                        cx="50%"
                        cy="50%"
                        innerRadius={45}
                        outerRadius={65}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {mockDepartmentRatios.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ fontSize: '10px', borderRadius: '8px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                {/* Custom Legends list */}
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-[9px] font-bold text-neutral-500 pb-2">
                  {mockDepartmentRatios.map((entry, index) => (
                    <div key={entry.name} className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                      <span>{entry.name} ({entry.value}%)</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>

        </div>
      </div>
    </>
  );
};
export default HRDashboardPage;
