import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Share2,
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { mockJobs } from '@/mocks/jobs';
import { JobApplicationForm, type ApplicationInputs } from '@/components/careers/JobApplicationForm';
import { Card, CardContent, Button, Modal, useToast } from '@/components/ui';
import SEOHead from '@/app/SEOHead';

export const JobDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Retrieve job
  const job = useMemo(() => {
    return mockJobs.find((j) => j.slug === slug);
  }, [slug]);

  if (!job) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-neutral-800">Position Not Found</h2>
        <p className="text-xs text-text-muted">The requested job listing path does not exist.</p>
        <Link to="/careers/jobs" className="text-xs font-bold text-primary">
          Back to Jobs Board
        </Link>
      </div>
    );
  }

  // Copy Job link to clipboard
  const handleShareLink = () => {
    const pageUrl = window.location.href;
    navigator.clipboard.writeText(pageUrl);
    toast({
      title: "Link Copied",
      description: "Job posting link has been copied to your clipboard.",
      variant: "success"
    });
  };

  // Submit Application Handler
  const onSubmitApplication = async (data: ApplicationInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Job application submitted:', job.title, data);
    toast({
      title: "Application Received",
      description: `Thank you, ${data.name}. We've received your application and will review details shortly.`,
      variant: "success"
    });
    setIsApplyModalOpen(false);
  };

  return (
    <>
      <SEOHead title={`${job.title} Details`} description={job.description} />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-5xl space-y-8 animate-in fade-in duration-300">
          
          {/* Header Link bar */}
          <div className="flex items-center justify-between">
            <Link to="/careers/jobs" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Jobs Board
            </Link>

            <button
              onClick={handleShareLink}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-primary transition-colors border border-border bg-white px-3 py-1.5 rounded-xl shadow-premium-sm"
            >
              <Share2 className="h-3.5 w-3.5" />
              Share Position
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Details panels */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-3">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary-50 text-primary border border-primary/20 uppercase tracking-wider">
                  {job.department} Department
                </span>
                <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight leading-tight">
                  {job.title}
                </h1>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Responsibilities */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-sm font-bold text-neutral-800 uppercase tracking-wider">Responsibilities</h3>
                  <ul className="space-y-3.5 text-xs text-text-muted">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-sm font-bold text-neutral-800 uppercase tracking-wider">Requirements</h3>
                  <ul className="space-y-3.5 text-xs text-text-muted">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="h-4.5 w-4.5 text-success shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-sm font-bold text-neutral-800 uppercase tracking-wider">Compensation & Benefits</h3>
                  <ul className="space-y-3.5 text-xs text-text-muted">
                    {job.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Specifications */}
            <div className="space-y-6">
              <Card variant="premium">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-sm font-bold text-neutral-900 border-b border-neutral-100 pb-2 mb-2">
                    Position Specs
                  </h3>

                  <div className="space-y-3.5 text-xs text-neutral-700">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-neutral-400 shrink-0" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-neutral-400 shrink-0" />
                      <span>{job.mode} Workplace Mode</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-neutral-400 shrink-0" />
                      <span>{job.experienceLevel} Level</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-neutral-400 shrink-0" />
                      <span>{job.salaryRange} Annual Range</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button onClick={() => setIsApplyModalOpen(true)} className="w-full">
                      Apply Now for Position
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* B2C registration prompt */}
              <Card className="bg-neutral-50/50 border-dashed">
                <CardContent className="p-5 space-y-3 text-xs">
                  <h4 className="font-bold text-neutral-800">Not ready to apply?</h4>
                  <p className="text-text-muted leading-relaxed">
                    Create a candidate account, upload your CV to our vector ledgers, and receive matches automatically when matches open.
                  </p>
                  <Link to="/careers/register" className="inline-flex items-center gap-1 font-bold text-primary hover:text-primary-hover">
                    Create profile portal
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            </div>

          </div>

        </div>
      </div>

      {/* Application Qualifier Modal */}
      <Modal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title="Job Application Submission"
      >
        <JobApplicationForm
          jobTitle={job.title}
          onSubmitSuccess={onSubmitApplication}
          onCancel={() => setIsApplyModalOpen(false)}
        />
      </Modal>
    </>
  );
};

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default JobDetailPage;
