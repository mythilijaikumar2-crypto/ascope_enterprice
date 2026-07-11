import React, { useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { mockAIMatchScores } from '@/mocks/ai-match-scores';
import { mockAIRecommendations } from '@/mocks/ai-recommendations';
import { mockSkillGaps } from '@/mocks/skill-gaps';
import { ResumeMatchScoreCard } from '@/components/ai/ResumeMatchScoreCard';
import { AIRecommendationCard } from '@/components/ai/AIRecommendationCard';
import { MissingSkillsList } from '@/components/ai/MissingSkillsList';
import SEOHead from '@/app/SEOHead';

export const ResumeMatchPage: React.FC = () => {
  const { jobId = 'job-1' } = useParams<{ jobId: string }>();
  const [searchParams] = useSearchParams();
  const candidateId = searchParams.get('candidateId') || 'cand-1';

  // Find overall scores list
  const jobScores = mockAIMatchScores[jobId] || [];
  const activeScore = useMemo(() => {
    return jobScores.find((s) => s.candidateId === candidateId) || jobScores[0];
  }, [jobScores, candidateId]);

  // Find recommendations templates
  const recommendations = mockAIRecommendations[candidateId] || [];

  // Find missing skills checklist
  const skillGaps = mockSkillGaps[candidateId] || [];

  if (!activeScore) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-neutral-800">Match Data Not Found</h2>
        <p className="text-xs text-text-muted">No telemetry evaluation fits this candidate-job pair.</p>
        <Link to="/hr/dashboard" className="text-xs font-bold text-primary">
          Back to HR Console
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead title={`Resume Match — ${activeScore.candidateName}`} description="Review deep qualification match weights and automated recommendations." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-5xl space-y-8 animate-in fade-in duration-300">
          
          {/* Back Nav */}
          <div className="flex items-center justify-between">
            <Link to={`/hr/ai/candidate-ranking/${jobId}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Rankings List
            </Link>

            <Link
              to={`/hr/ai/skill-analysis/${candidateId}`}
              className="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1"
            >
              Analyze Skills Radar
            </Link>
          </div>

          {/* Title */}
          <div className="space-y-1">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Automated Assessor</span>
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
              AI Resume Match Analysis
            </h1>
            <p className="text-xs text-text-muted">
              Deep qualification check: comparing <strong className="text-neutral-800">{activeScore.candidateName}</strong> CV credentials against requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            
            {/* Left side: score details */}
            <div className="lg:col-span-3 space-y-6">
              <ResumeMatchScoreCard
                overallScore={activeScore.overallScore}
                skillsScore={activeScore.skillsScore}
                experienceScore={activeScore.experienceScore}
                educationScore={activeScore.educationScore}
              />
              <MissingSkillsList skillsList={skillGaps} />
            </div>

            {/* Right side: recommendations */}
            <div className="lg:col-span-2 space-y-6">
              <AIRecommendationCard recommendations={recommendations} />
              
              {/* Telemetry Disclaimer Box */}
              <div className="p-4 bg-neutral-50 border border-neutral-100 rounded-2xl flex gap-2.5 text-xs leading-relaxed text-text-muted">
                <AlertCircle className="h-5 w-5 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-neutral-800 block">AI Screening Disclaimer</span>
                  <p className="mt-0.5">
                    Match percentages represent automated semantic comparisons across vector indices. These metrics are advisory signals to coordinate recruiter interviews, not final screening decisions.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
export default ResumeMatchPage;
