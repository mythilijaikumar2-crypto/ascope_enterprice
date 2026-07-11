import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import type { EngagementPoint } from '@/mocks/analytics-data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export interface ServiceEngagementChartProps {
  engagementData: EngagementPoint[];
}

export const ServiceEngagementChart: React.FC<ServiceEngagementChartProps> = ({
  engagementData
}) => {
  return (
    <Card className="hover:border-primary/20 transition-all duration-300">
      <CardHeader>
        <CardTitle>B2B Engagement Portfolios</CardTitle>
        <CardDescription>Active client delivery contract categories mapped to completed sprints.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        
        {/* Recharts Grid */}
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={engagementData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="category" stroke="#94a3b8" fontSize={9} tickLine={false} />
              <YAxis stroke="#94a3b8" fontSize={9} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: '10px', borderRadius: '12px' }} />
              <Legend wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} />
              <Bar dataKey="activeContracts" name="Active Deliveries" fill="#0f766e" radius={[4, 4, 0, 0]} />
              <Bar dataKey="deliveredSprints" name="Completed Sprints" fill="#0284c7" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Screen Reader Table */}
        <div className="border border-neutral-100 rounded-xl overflow-hidden bg-neutral-50/30">
          <table className="w-full text-left border-collapse text-[10px] font-semibold text-neutral-600">
            <caption className="sr-only">B2B contracts portfolios and completed sprints summary table</caption>
            <thead className="bg-neutral-50 text-[9px] uppercase tracking-wider text-neutral-400 border-b border-neutral-100">
              <tr>
                <th className="px-4 py-2">Consulting Category</th>
                <th className="px-4 py-2 text-center">Active Contracts</th>
                <th className="px-4 py-2 text-right">Sprints Delivered</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {engagementData.map((item) => (
                <tr key={item.category} className="hover:bg-neutral-100/50 transition-colors">
                  <td className="px-4 py-2 text-neutral-800 font-bold">{item.category}</td>
                  <td className="px-4 py-2 text-center font-bold text-neutral-700">{item.activeContracts}</td>
                  <td className="px-4 py-2 text-right font-bold text-info">{item.deliveredSprints}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </CardContent>
    </Card>
  );
};
export default ServiceEngagementChart;
