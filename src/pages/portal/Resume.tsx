import React, { useState, useEffect } from 'react';
import { defaultCandidateProfile, type CandidateProfile } from '@/mocks/candidate-profile';
import { ResumeUploader } from '@/components/portal/ResumeUploader';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui';
import SEOHead from '@/app/SEOHead';

export const ResumePage: React.FC = () => {
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

  const handleUploadComplete = (fileName: string, fileSize: string) => {
    const updated = { ...profile, resumeFileName: fileName, resumeFileSize: fileSize };
    setProfile(updated);
    localStorage.setItem('ascope_candidate_profile', JSON.stringify(updated));
    toast({
      title: "Resume Uploaded",
      description: `"${fileName}" has been linked to your candidate profile index.`,
      variant: "success",
    });
  };

  const handleRemove = () => {
    const updated = { ...profile, resumeFileName: null, resumeFileSize: null };
    setProfile(updated);
    localStorage.setItem('ascope_candidate_profile', JSON.stringify(updated));
    toast({
      title: "Resume Deleted",
      description: "Resume file has been unlinked from your profile index.",
      variant: "info",
    });
  };

  return (
    <>
      <SEOHead title="Candidate Resume Manager" description="Upload, update, or remove your profile CV credentials." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-3xl space-y-8 animate-in fade-in duration-300">
          
          {/* Back Nav */}
          <Link to="/portal/dashboard" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>

          {/* Uploader Card */}
          <Card>
            <CardHeader>
              <CardTitle>Resume Manager</CardTitle>
              <CardDescription>Upload your CV credentials to match with B2B recruitment teams automatically.</CardDescription>
            </CardHeader>
            <CardContent>
              <ResumeUploader
                initialFileName={profile.resumeFileName}
                initialFileSize={profile.resumeFileSize}
                onUploadComplete={handleUploadComplete}
                onRemove={handleRemove}
              />
            </CardContent>
          </Card>

        </div>
      </div>
    </>
  );
};
export default ResumePage;
