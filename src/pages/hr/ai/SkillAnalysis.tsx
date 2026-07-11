import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockCandidates } from '@/mocks/candidates';
import { SkillAnalysisRadarChart } from '@/components/ai/SkillAnalysisRadarChart';
import { ArrowLeft, Sparkles } from 'lucide-react';
import SEOHead from '@/app/SEOHead';

// Master comparative skill vectors per candidate
const CANDIDATE_RADARS: Record<string, { subject: string; candidateScore: number; requiredScore: number }[]> = {
  "cand-1": [ // Sarah Connor
    { subject: "React Framework", candidateScore: 95, requiredScore: 85 },
    { subject: "State Architecture", candidateScore: 90, requiredScore: 80 },
    { subject: "Security & Crypto", candidateScore: 88, requiredScore: 90 },
    { subject: "Distributed API", candidateScore: 78, requiredScore: 85 },
    { subject: "Visual Tokens UI", candidateScore: 85, requiredScore: 70 }
  ],
  "cand-2": [ // John Watson
    { subject: "React Framework", candidateScore: 75, requiredScore: 85 },
    { subject: "State Architecture", candidateScore: 68, requiredScore: 80 },
    { subject: "Security & Crypto", candidateScore: 60, requiredScore: 90 },
    { subject: "Distributed API", candidateScore: 72, requiredScore: 85 },
    { subject: "Visual Tokens UI", candidateScore: 80, requiredScore: 70 }
  ]
};

export const SkillAnalysisPage: React.FC = () => {
  const { candidateId = 'cand-1' } = useParams<{ candidateId: string }>();

  // Retrieve candidate profile details
  const candidate = useMemo(() => {
    return mockCandidates.find((c) => c.id === candidateId);
  }, [candidateId]);

  // Load skills vectors points
  const skillsData = (CANDIDATE_RADARS[candidateId] || CANDIDATE_RADARS["cand-1"]) ?? [];

  if (!candidate) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-neutral-800">Candidate Not Found</h2>
        <p className="text-xs text-text-muted">No skill matrix analysis exists for this candidate ID.</p>
        <Link to="/hr/candidates" className="text-xs font-bold text-primary">
          Back to Candidates Board
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead title={`Skill Analysis — ${candidate.name}`} description={`Reviewing automated skill radar overlays for ${candidate.name}.`} />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-4xl space-y-8 animate-in fade-in duration-300">
          
          {/* Back Nav */}
          <Link to={`/hr/candidates/${candidateId}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Profile details
          </Link>

          {/* Title */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Radar Vector Mapping</span>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-primary-50 text-primary border border-primary/20 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="h-3 w-3 shrink-0" />
                AI Suggested
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
              Skill Analysis radar chart
            </h1>
            <p className="text-xs text-text-muted">
              Map and contrast <strong className="text-neutral-800">{candidate.name}</strong> capabilities overlaying required job specifications levels.
            </p>
          </div>

          {/* Radar Chart Wrapper */}
          <div className="max-w-xl mx-auto">
            <SkillAnalysisRadarChart
              candidateName={candidate.name}
              skillsData={skillsData}
            />
          </div>

        </div>
      </div>
    </>
  );
};
export default SkillAnalysisPage;
