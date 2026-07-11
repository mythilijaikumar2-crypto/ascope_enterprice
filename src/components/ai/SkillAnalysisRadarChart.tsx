import React from 'react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip
} from 'recharts';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export interface SkillAnalysisRadarChartProps {
  candidateName: string;
  skillsData: {
    subject: string;
    candidateScore: number;
    requiredScore: number;
  }[];
}

export const SkillAnalysisRadarChart: React.FC<SkillAnalysisRadarChartProps> = ({
  candidateName,
  skillsData
}) => {
  return (
    <Card className="hover:border-primary/20 transition-all duration-300">
      <CardHeader>
        <CardTitle>Skill Matrix Analysis</CardTitle>
        <CardDescription>Comparative vector mappings for {candidateName} capabilities.</CardDescription>
      </CardHeader>
      <CardContent className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={skillsData}>
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis dataKey="subject" stroke="#94a3b8" fontSize={9} fontStyle="bold" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#cbd5e1" fontSize={8} />
            <Tooltip contentStyle={{ fontSize: '10px', borderRadius: '12px' }} />
            <Radar
              name="Required Spec Level"
              dataKey="requiredScore"
              stroke="#0284c7"
              fill="#0284c7"
              fillOpacity={0.08}
            />
            <Radar
              name={`${candidateName} Level`}
              dataKey="candidateScore"
              stroke="#0f766e"
              fill="#0f766e"
              fillOpacity={0.25}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
export default SkillAnalysisRadarChart;
