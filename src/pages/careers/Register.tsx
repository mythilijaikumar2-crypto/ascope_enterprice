import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Target, ArrowRight } from 'lucide-react';
import { CandidateRegisterForm, type RegisterInputs } from '@/components/careers/CandidateRegisterForm';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui';
import SEOHead from '@/app/SEOHead';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegister = async (data: RegisterInputs) => {
    // Simulate register request delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Candidate registered:', data);

    toast({
      title: "Account Created",
      description: `Welcome, ${data.name}! Your candidate profile is ready. Redirecting to workspace...`,
      variant: "success",
    });

    // Simulate login session setup and transition immediately to portal dashboard
    navigate('/portal/dashboard');
  };

  return (
    <>
      <SEOHead title="Candidate Registration" description="Register a candidate profile, upload CV credentials, and map career targets." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-5xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Candidate Workspace</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Create Candidate Account
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              Unlock direct placement tracking, upload your credentials to our vector search indices, and connect to B2B teams.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start pt-6">
            
            {/* Registration Form Panel */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-neutral-900 mb-4">Register Candidate Profile</h3>
                  <CandidateRegisterForm onRegisterSuccess={handleRegister} />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Guidelines */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-base font-bold text-neutral-900 tracking-tight">
                    Candidate Guarantee
                  </h3>
                  
                  <div className="space-y-4 text-xs">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-success shrink-0 pt-0.5" />
                      <div>
                        <span className="font-bold text-neutral-800 block">Encrypted Credentials</span>
                        <p className="text-text-muted mt-0.5">Your resumes, profiles, and contact details are fully encrypted and only visible to authorized HR specialists.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 border-t border-neutral-100 pt-4">
                      <Target className="h-5 w-5 text-primary shrink-0 pt-0.5" />
                      <div>
                        <span className="font-bold text-neutral-800 block">Precision Matching</span>
                        <p className="text-text-muted mt-0.5">Our vector indexes map candidate skills directly to open requirements, preventing mismatch errors.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Already registered check */}
              <div className="p-4 border border-info/20 bg-info-50/10 rounded-2xl flex flex-col gap-2 text-xs">
                <h4 className="font-bold text-neutral-800">Already registered?</h4>
                <p className="text-text-muted">
                  Use your credentials to access the candidate workspace immediately.
                </p>
                <Link to="/portal/dashboard" className="inline-flex items-center gap-1 font-bold text-primary hover:text-primary-hover">
                  Go to Candidate Portal
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
export default RegisterPage;
