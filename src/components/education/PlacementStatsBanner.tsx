import React from 'react';
import { BarChartWrapper } from '@/components/ui/chart';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { mockPlacementMetrics, mockPartnerCompanies } from '@/mocks/placement-stats';
import { Building2 } from 'lucide-react';

export const PlacementStatsBanner: React.FC = () => {
  // Map metrics for chart
  const chartData = mockPlacementMetrics.map((item) => ({
    year: String(item.year),
    salary: item.averageSalary,
    rate: item.placementRate
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      {/* Chart Card */}
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Graduate Salary Growth</CardTitle>
          <CardDescription>Average annual starting salary of placed bootcamp graduates.</CardDescription>
        </CardHeader>
        <CardContent>
          <BarChartWrapper
            data={chartData}
            xKey="year"
            series={[{ key: 'salary', name: 'Average Salary ($)', color: '#7c3aed' }]}
            height={260}
          />
        </CardContent>
      </Card>

      {/* Partner Companies Cards */}
      <Card className="lg:col-span-2 flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Top Hiring Partners</CardTitle>
          <CardDescription>Leading technology firms recruiting Ascope Tech Academy graduates.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3.5">
            {mockPartnerCompanies.map((company) => (
              <div
                key={company.name}
                className="p-4 border border-border rounded-xl bg-white flex flex-col justify-between h-24 hover:border-primary/20 transition-all duration-300 shadow-premium-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center font-display font-extrabold text-neutral-500 text-xs">
                    {company.logo}
                  </div>
                  <span className="text-xs font-bold text-neutral-800 tracking-tight leading-snug">
                    {company.name}
                  </span>
                </div>
                <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider block mt-2">
                  {company.industry}
                </span>
              </div>
            ))}
          </div>
          <div className="pt-2 border-t border-neutral-100 flex items-center gap-2 text-xs text-text-muted">
            <Building2 className="h-4 w-4 text-primary shrink-0" />
            <span>Over 25+ software organizations recruit from our academy classes.</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default PlacementStatsBanner;
