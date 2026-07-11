import React, { useState } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';
import type { AIRecommendation } from '@/mocks/ai-recommendations';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui';

export interface AIRecommendationCardProps {
  recommendations: AIRecommendation[];
}

export const AIRecommendationCard: React.FC<AIRecommendationCardProps> = ({
  recommendations
}) => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const activeRec = recommendations[index] || recommendations[0];

  const handleRegenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % recommendations.length);
      setLoading(false);
    }, 800); // 800ms skeleton timing
  };

  return (
    <Card className="border-primary/10 hover:border-primary/20 transition-all duration-300">
      <CardHeader className="border-b border-neutral-100 pb-3 flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-sm">AI Strategic Recommendation</CardTitle>
          <CardDescription className="text-[10px]">Automated semantic evaluation metrics summaries</CardDescription>
        </div>
        <button
          type="button"
          onClick={handleRegenerate}
          disabled={loading || recommendations.length <= 1}
          className="p-1.5 border border-border hover:border-primary/20 hover:bg-primary-50/10 text-neutral-400 hover:text-primary rounded-xl transition-all disabled:opacity-50"
          aria-label="Regenerate recommendation text"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin text-primary' : ''}`} />
        </button>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {loading || !activeRec ? (
          <div className="space-y-2.5">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-3.5 w-1/2 mt-4" />
          </div>
        ) : (
          <div className="space-y-4 text-xs">
            <p className="text-neutral-700 leading-relaxed font-medium">
              "{activeRec.summary}"
            </p>
            
            <div className="p-3.5 bg-neutral-50 border border-neutral-100 rounded-xl space-y-1.5 leading-relaxed">
              <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider block">Suggested HR Action</span>
              <span className="font-bold text-neutral-800 block">{activeRec.suggestedAction}</span>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] text-text-light font-bold">
              <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>Matching Confidence Level: {activeRec.confidence}%</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
export default AIRecommendationCard;
