import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import type { EnrollmentPoint } from '@/mocks/analytics-data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export interface EducationEnrollmentChartProps {
  trendsData: EnrollmentPoint[];
}

export const EducationEnrollmentChart: React.FC<EducationEnrollmentChartProps> = ({
  trendsData
}) => {
  return (
    <Card className="hover:border-primary/20 transition-all duration-300">
      <CardHeader>
        <CardTitle>Enrollment vs Placements Growth</CardTitle>
        <CardDescription>Monthly student intakes mapped against job placement completions.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        
        {/* Recharts Grid */}
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorEnrolled" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0f766e" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#0f766e" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPlaced" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={9} tickLine={false} />
              <YAxis stroke="#94a3b8" fontSize={9} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: '10px', borderRadius: '12px' }} />
              <Legend wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} />
              <Area type="monotone" dataKey="enrolled" name="Students Enrolled" stroke="#0f766e" fillOpacity={1} fill="url(#colorEnrolled)" strokeWidth={2} />
              <Area type="monotone" dataKey="placed" name="Graduates Placed" stroke="#22c55e" fillOpacity={1} fill="url(#colorPlaced)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Screen Reader Table */}
        <div className="border border-neutral-100 rounded-xl overflow-hidden bg-neutral-50/30">
          <table className="w-full text-left border-collapse text-[10px] font-semibold text-neutral-600">
            <caption className="sr-only">Student enrollment and placements metric summary table</caption>
            <thead className="bg-neutral-50 text-[9px] uppercase tracking-wider text-neutral-400 border-b border-neutral-100">
              <tr>
                <th className="px-4 py-2">Month</th>
                <th className="px-4 py-2 text-center">New Enrolls</th>
                <th className="px-4 py-2 text-right">Job Placements</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {trendsData.map((item) => (
                <tr key={item.month} className="hover:bg-neutral-100/50 transition-colors">
                  <td className="px-4 py-2 text-neutral-800 font-bold">{item.month}</td>
                  <td className="px-4 py-2 text-center font-bold text-neutral-700">{item.enrolled}</td>
                  <td className="px-4 py-2 text-right font-bold text-success">{item.placed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </CardContent>
    </Card>
  );
};
export default EducationEnrollmentChart;
