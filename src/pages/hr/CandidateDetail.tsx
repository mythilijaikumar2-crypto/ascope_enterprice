import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { mockCandidates } from '@/mocks/candidates';
import { CandidateDetailView } from '@/components/hr/CandidateDetailView';
import SEOHead from '@/app/SEOHead';

export const CandidateDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Retrieve candidate
  const candidate = useMemo(() => {
    return mockCandidates.find((c) => c.id === id);
  }, [id]);

  if (!candidate) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-neutral-800">Candidate Profile Not Found</h2>
        <p className="text-xs text-text-muted">The requested candidate ID does not exist in our vector ledger.</p>
        <Link to="/hr/candidates" className="text-xs font-bold text-primary">
          Back to Candidates Board
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead title={`Candidate ${candidate.name}`} description={`Reviewing profile details and resume credentials for ${candidate.name}.`} />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-5xl space-y-8 animate-in fade-in duration-300">
          
          {/* Back Nav */}
          <Link to="/hr/candidates" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Candidates Board
          </Link>

          {/* Details View Component */}
          <CandidateDetailView candidate={candidate} />

        </div>
      </div>
    </>
  );
};
export default CandidateDetailPage;
