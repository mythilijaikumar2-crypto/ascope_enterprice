import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell
} from 'recharts';
import type { FunnelStage } from '@/mocks/analytics-data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export interface HiringFunnelChartProps {
  funnelData: FunnelStage[];
}

const COLORS = ['#0f766e', '#0d9488', '#06b6d4', '#22c55e'];

export const HiringFunnelChart: React.FC<HiringFunnelChartProps> = ({ funnelData }) => {
  return (
    <Card className="hover:border-primary/20 transition-all duration-300">
      <CardHeader>
        <CardTitle>Recruiting Conversion Funnel</CardTitle>
        <CardDescription>Candidate pipeline progression counts from Applied to Offered.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        
        {/* Recharts Grid */}
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={funnelData}
              margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis type="number" stroke="#94a3b8" fontSize={9} tickLine={false} />
              <YAxis dataKey="stage" type="category" stroke="#94a3b8" fontSize={9} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: '10px', borderRadius: '12px' }} />
              <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                {funnelData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Screen Reader Accessible Summary Table */}
        <div className="border border-neutral-100 rounded-xl overflow-hidden bg-neutral-50/30">
          <table className="w-full text-left border-collapse text-[10px] font-semibold text-neutral-600">
            <caption className="sr-only">Hiring Pipeline conversion rate table summary</caption>
            <thead className="bg-neutral-50 text-[9px] uppercase tracking-wider text-neutral-400 border-b border-neutral-100">
              <tr>
                <th className="px-4 py-2">Pipeline Stage</th>
                <th className="px-4 py-2 text-center">Applicant Count</th>
                <th className="px-4 py-2 text-right">Conversion Ratio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {funnelData.map((item) => (
                <tr key={item.stage} className="hover:bg-neutral-100/50 transition-colors">
                  <td className="px-4 py-2 text-neutral-800 font-bold">{item.stage}</td>
                  <td className="px-4 py-2 text-center font-bold text-neutral-700">{item.count}</td>
                  <td className="px-4 py-2 text-right font-bold text-primary">{item.percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </CardContent>
    </Card>
  );
};
export default HiringFunnelChart;
