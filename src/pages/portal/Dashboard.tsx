import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { defaultCandidateProfile, type CandidateProfile } from '@/mocks/candidate-profile';
import { mockCandidateApplications } from '@/mocks/candidate-applications';
import { ApplicationTrackerList } from '@/components/portal/ApplicationTrackerList';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { User, FileText, Sliders } from 'lucide-react';
import SEOHead from '@/app/SEOHead';

export const DashboardPage: React.FC = () => {
  const [profile, setProfile] = useState<CandidateProfile>(defaultCandidateProfile);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('ascope_candidate_profile');
    if (saved) {
      try {
        setProfile(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading candidate profile:", e);
      }
    } else {
      localStorage.setItem('ascope_candidate_profile', JSON.stringify(defaultCandidateProfile));
    }
  }, []);

  // Compute profile completeness percentage
  const completeness = useMemo(() => {
    let score = 0;
    if (profile.hasPhoto) score += 25;
    if (profile.resumeFileName) score += 25;
    if (profile.skills.length >= 3) score += 25;
    if (profile.emailVerified) score += 25;
    return score;
  }, [profile]);

  // SVG parameters for completeness meter
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (completeness / 100) * circumference;

  return (
    <>
      <SEOHead title="Candidate Workspace" description="Manage your job applications, resume credentials, and skills tags." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-5xl space-y-8 animate-in fade-in duration-300">
          
          {/* Header Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 sm:p-8 bg-white border border-border rounded-3xl shadow-premium-sm">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-display font-extrabold text-xl shadow-inner-soft">
                {profile.avatar}
              </div>
              <div className="space-y-1">
                <h1 className="text-xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
                  Welcome, {profile.name}
                </h1>
                <p className="text-xs text-text-muted">{profile.title}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link to="/portal/profile" className="inline-flex items-center justify-center bg-white hover:bg-neutral-50 text-neutral-700 text-xs font-semibold py-2 px-4 border border-border rounded-xl shadow-premium-sm transition-all">
                Edit Profile
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Dashboard left columns: applications list */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center justify-between px-1">
                <h2 className="text-base font-bold text-neutral-900 tracking-tight">Active Applications</h2>
                <Link to="/portal/applications" className="text-xs font-bold text-primary hover:text-primary-hover">
                  View All
                </Link>
              </div>
              <ApplicationTrackerList applications={mockCandidateApplications} />
            </div>

            {/* Dashboard right columns: completeness widgets */}
            <div className="space-y-6">
              
              {/* Completeness circle card */}
              <Card className="text-center flex flex-col items-center p-6 space-y-4">
                <CardHeader className="p-0">
                  <CardTitle className="text-sm">Profile Completeness</CardTitle>
                </CardHeader>
                <CardContent className="p-0 relative flex items-center justify-center">
                  <svg className="w-24 h-24 transform -rotate-90">
                    {/* Background Circle */}
                    <circle
                      cx="48"
                      cy="48"
                      r={radius}
                      className="text-neutral-100"
                      strokeWidth="6"
                      stroke="currentColor"
                      fill="transparent"
                    />
                    {/* Animated Fill Circle */}
                    <circle
                      cx="48"
                      cy="48"
                      r={radius}
                      className="text-primary transition-all duration-500 ease-out"
                      strokeWidth="6"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                    />
                  </svg>
                  <span className="absolute font-display font-extrabold text-neutral-900 text-base">
                    {completeness}%
                  </span>
                </CardContent>
                <p className="text-[10px] text-text-light leading-relaxed">
                  Upload your CV, verify email, and add skills to reach 100% match index.
                </p>
              </Card>

              {/* Navigation Quick Links Panel */}
              <Card>
                <CardContent className="p-5 space-y-3.5">
                  <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Candidate Options</h4>
                  <div className="space-y-1 text-xs">
                    <Link to="/portal/profile" className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-neutral-50 text-neutral-700 transition-colors">
                      <User className="h-4.5 w-4.5 text-neutral-400" />
                      <span>Contact Profile</span>
                    </Link>
                    <Link to="/portal/resume" className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-neutral-50 text-neutral-700 transition-colors">
                      <FileText className="h-4.5 w-4.5 text-neutral-400" />
                      <span>Resume Manager</span>
                    </Link>
                    <Link to="/portal/skills" className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-neutral-50 text-neutral-700 transition-colors">
                      <Sliders className="h-4.5 w-4.5 text-neutral-400" />
                      <span>Skills tag editor</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};
export default DashboardPage;
