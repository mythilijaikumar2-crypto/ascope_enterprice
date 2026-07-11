import React from 'react';
import type { SuccessStory } from '@/mocks/success-stories';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

export interface SuccessStoryCardProps {
  story: SuccessStory;
}

export const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({ story }) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="space-y-3 pb-2">
        {/* Student Profile */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-xs text-primary font-display">
            {story.avatar}
          </div>
          <div>
            <h3 className="text-sm font-bold text-neutral-900 leading-snug">
              {story.studentName}
            </h3>
            <p className="text-[10px] text-text-muted mt-0.5 leading-none">
              Placed at <span className="font-semibold text-neutral-800">{story.placedCompany}</span>
            </p>
          </div>
        </div>
        
        {/* Outcome Badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-success-50 border border-success/20 text-xs font-semibold text-success w-fit">
          {story.placedRole} &bull; {story.salaryIncrease}
        </div>
      </CardHeader>

      <CardContent className="text-xs text-text-muted leading-relaxed">
        &ldquo;{story.quote}&rdquo;
      </CardContent>

      <CardFooter className="pt-2 border-t border-neutral-100/50 mt-4 flex items-center justify-between text-[10px] text-text-light font-medium">
        <span>Course: {story.courseTitle}</span>
        <span>Class of {story.year}</span>
      </CardFooter>
    </Card>
  );
};
export default SuccessStoryCard;
