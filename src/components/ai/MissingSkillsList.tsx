import React from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import type { SkillGapPoint } from '@/mocks/skill-gaps';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface MissingSkillsListProps {
  skillsList: SkillGapPoint[];
}

export const MissingSkillsList: React.FC<MissingSkillsListProps> = ({ skillsList }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Core Requirements Checklist</CardTitle>
        <CardDescription>Overlaps comparison checking candidate skills against requirements.</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillsList.map((item) => (
            <div
              key={item.skill}
              className={cn(
                "p-3 border rounded-xl flex items-center justify-between gap-3 text-xs font-semibold",
                item.match
                  ? "bg-success-50/20 border-success/15 text-success"
                  : "bg-error-50/20 border-error/15 text-error"
              )}
            >
              <span className="truncate">{item.skill}</span>
              {item.match ? (
                <CheckCircle2 className="h-4.5 w-4.5 shrink-0" />
              ) : (
                <div className="flex items-center gap-1">
                  <span className="text-[9px] font-bold uppercase tracking-wider hidden sm:inline-block">Missing</span>
                  <AlertTriangle className="h-4.5 w-4.5 shrink-0" />
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
export default MissingSkillsList;
