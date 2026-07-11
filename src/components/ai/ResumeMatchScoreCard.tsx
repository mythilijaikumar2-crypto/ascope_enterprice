import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export interface ResumeMatchScoreCardProps {
  overallScore: number;
  skillsScore: number;
  experienceScore: number;
  educationScore: number;
}

export const ResumeMatchScoreCard: React.FC<ResumeMatchScoreCardProps> = ({
  overallScore,
  skillsScore,
  experienceScore,
  educationScore
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [animatedScore, setAnimatedScore] = useState(0);

  // Animate overall score value from 0 to target on mount
  useEffect(() => {
    if (prefersReducedMotion) {
      setAnimatedScore(overallScore);
      return;
    }
    const duration = 1000;
    const intervalTime = 20;
    const stepsCount = duration / intervalTime;
    const stepValue = overallScore / stepsCount;

    const timer = setInterval(() => {
      setAnimatedScore((prev) => {
        if (prev >= overallScore) {
          clearInterval(timer);
          return overallScore;
        }
        return prev + stepValue;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [overallScore, prefersReducedMotion]);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  return (
    <Card className="hover:border-primary/20 transition-all duration-300">
      <CardHeader className="border-b border-neutral-100 pb-3 flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-sm">AI Match Telemetry</CardTitle>
          <CardDescription className="text-[10px]">Statistical qualifications comparison model</CardDescription>
        </div>
        <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-primary-50 text-primary border border-primary/20 uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="h-3 w-3 shrink-0" />
          AI Suggested
        </span>
      </CardHeader>
      <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        
        {/* Radial Meter */}
        <div className="flex flex-col items-center justify-center relative select-none">
          <svg className="w-28 h-28 transform -rotate-90" aria-label={`${overallScore} percent overall match`}>
            {/* Gray Track */}
            <circle
              cx="56"
              cy="56"
              r={radius}
              className="text-neutral-100"
              strokeWidth="7"
              stroke="currentColor"
              fill="transparent"
            />
            {/* Animated primary overlay */}
            <motion.circle
              cx="56"
              cy="56"
              r={radius}
              className="text-primary transition-all duration-500"
              strokeWidth="7"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
          </svg>
          <div className="absolute text-center">
            <span className="font-display font-extrabold text-neutral-900 text-lg leading-none block">
              {animatedScore.toFixed(0)}%
            </span>
            <span className="text-[8px] text-text-light font-bold uppercase tracking-wider block mt-0.5">
              Match Index
            </span>
          </div>
        </div>

        {/* Categories weights bars */}
        <div className="space-y-3.5 text-xs font-semibold text-neutral-700">
          {/* Skills */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[10px]">
              <span>Skills Alignment</span>
              <span className="font-bold text-neutral-900">{skillsScore}%</span>
            </div>
            <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skillsScore}%` }}
                transition={{ duration: prefersReducedMotion ? 0.05 : 0.6 }}
                className="bg-teal-500 h-full rounded-full"
              />
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[10px]">
              <span>Experience Match</span>
              <span className="font-bold text-neutral-900">{experienceScore}%</span>
            </div>
            <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${experienceScore}%` }}
                transition={{ duration: prefersReducedMotion ? 0.05 : 0.6 }}
                className="bg-sky-500 h-full rounded-full"
              />
            </div>
          </div>

          {/* Education */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[10px]">
              <span>Education Relevance</span>
              <span className="font-bold text-neutral-900">{educationScore}%</span>
            </div>
            <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${educationScore}%` }}
                transition={{ duration: prefersReducedMotion ? 0.05 : 0.6 }}
                className="bg-emerald-500 h-full rounded-full"
              />
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};
export default ResumeMatchScoreCard;
