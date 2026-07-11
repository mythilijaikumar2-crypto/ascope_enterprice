import React, { useState, useEffect } from 'react';
import { defaultCandidateProfile, type CandidateProfile } from '@/mocks/candidate-profile';
import { SkillTagEditor } from '@/components/portal/SkillTagEditor';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui';
import SEOHead from '@/app/SEOHead';

export const SkillsPage: React.FC = () => {
  const [profile, setProfile] = useState<CandidateProfile>(defaultCandidateProfile);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('ascope_candidate_profile');
    if (saved) {
      try {
        setProfile(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading candidate profile:", e);
      }
    }
  }, []);

  const handleSkillsChange = (updatedSkills: string[]) => {
    const updated = { ...profile, skills: updatedSkills };
    setProfile(updated);
    localStorage.setItem('ascope_candidate_profile', JSON.stringify(updated));
    toast({
      title: "Skills Updated",
      description: "Your active profile skills directory has been synced.",
      variant: "success",
    });
  };

  return (
    <>
      <SEOHead title="Candidate Skills Directory" description="Configure and edit your active profile skills tags." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-3xl space-y-8 animate-in fade-in duration-300">
          
          {/* Back Nav */}
          <Link to="/portal/dashboard" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>

          {/* Tag Editor Wrapper */}
          <SkillTagEditor skills={profile.skills} onChange={handleSkillsChange} />

        </div>
      </div>
    </>
  );
};
export default SkillsPage;
