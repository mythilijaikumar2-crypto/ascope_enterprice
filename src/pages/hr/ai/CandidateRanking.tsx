import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockAIMatchScores } from '@/mocks/ai-match-scores';
import { CandidateRankingTable } from '@/components/ai/CandidateRankingTable';
import { ArrowLeft, Sparkles } from 'lucide-react';
import SEOHead from '@/app/SEOHead';

export const CandidateRankingPage: React.FC = () => {
  const { jobId = 'job-1' } = useParams<{ jobId: string }>();

  // Retrieve rankings list
  const rankings = mockAIMatchScores[jobId] || [];

  return (
    <>
      <SEOHead title="Candidate AI Rankings" description="Compare applicant qualifications match index scores." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-5xl space-y-8 animate-in fade-in duration-300">
          
          {/* Back Nav */}
          <Link to="/hr/candidates" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Candidates Board
          </Link>

          {/* Title */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Automated Ranking</span>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-primary-50 text-primary border border-primary/20 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="h-3 w-3 shrink-0" />
                AI Suggested
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
              AI Candidate Ranking list
            </h1>
            <p className="text-xs text-text-muted">Compare applicant credentials matching vectors sorted by overall relevance.</p>
          </div>

          {/* Table wrapper */}
          <div className="bg-white border border-border p-6 rounded-2xl shadow-premium-sm">
            <CandidateRankingTable rankings={rankings} />
          </div>

        </div>
      </div>
    </>
  );
};
export default CandidateRankingPage;
