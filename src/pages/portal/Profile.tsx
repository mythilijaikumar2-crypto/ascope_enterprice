import React, { useState, useEffect } from 'react';
import { defaultCandidateProfile, type CandidateProfile } from '@/mocks/candidate-profile';
import { ProfileForm } from '@/components/portal/ProfileForm';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/app/SEOHead';

export const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<CandidateProfile>(defaultCandidateProfile);

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

  const handleSave = (updated: CandidateProfile) => {
    setProfile(updated);
    localStorage.setItem('ascope_candidate_profile', JSON.stringify(updated));
  };

  return (
    <>
      <SEOHead title="Candidate Profile" description="Edit your professional details and contact settings." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-3xl space-y-8 animate-in fade-in duration-300">
          
          {/* Back Nav */}
          <Link to="/portal/dashboard" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>

          {/* Form Card */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Details</CardTitle>
              <CardDescription>Update your contact info, biography, and professional headline.</CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileForm profile={profile} onSave={handleSave} />
            </CardContent>
          </Card>

        </div>
      </div>
    </>
  );
};
export default ProfilePage;
