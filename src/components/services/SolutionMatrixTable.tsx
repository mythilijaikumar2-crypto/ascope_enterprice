import React from 'react';
import { mockEngagementTiers } from '@/mocks/engagement-tiers';
import { Shield } from 'lucide-react';

export const SolutionMatrixTable: React.FC = () => {
  return (
    <div className="border border-border bg-white rounded-2xl shadow-premium-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-neutral-50/50 border-b border-border font-bold text-neutral-800 font-display">
              <th className="p-4 sm:p-5">Support Capabilities</th>
              <th className="p-4 sm:p-5">Tier 1: Consultant Integration</th>
              <th className="p-4 sm:p-5">Tier 2: Dedicated Scrum Pod</th>
              <th className="p-4 sm:p-5">Tier 3: Enterprise Partnership</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 font-medium text-neutral-700">
            {mockEngagementTiers.map((row, idx) => (
              <tr key={idx} className="hover:bg-neutral-50/20 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-neutral-900">{row.feature}</td>
                <td className="p-4 sm:p-5 text-text-muted">{row.tier1}</td>
                <td className="p-4 sm:p-5 text-neutral-800">{row.tier2}</td>
                <td className="p-4 sm:p-5 text-primary font-semibold">{row.tier3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-neutral-100 bg-neutral-50/30 flex items-center gap-2 text-[10px] text-text-light font-bold uppercase tracking-wider">
        <Shield className="h-4 w-4 text-primary shrink-0" />
        <span>All engagement tiers support NDAs, source control ownership, and dedicated Slack channels.</span>
      </div>
    </div>
  );
};
export default SolutionMatrixTable;
