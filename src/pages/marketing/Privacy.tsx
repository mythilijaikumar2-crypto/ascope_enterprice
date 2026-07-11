import React from 'react';
import SEOHead from '@/app/SEOHead';

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Privacy Policy" description="Privacy policy and data protection details of Ascope Tech." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-3xl space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Legal</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-text-muted">Last Updated: July 2026</p>
          </div>
          
          <div className="prose prose-neutral text-xs text-text-muted space-y-6 leading-relaxed">
            <p>
              At Ascope Tech, accessible from our platform, one of our main priorities is the privacy of our visitors and users. This Privacy Policy document contains types of information that is collected and recorded by Ascope Tech and how we use it.
            </p>
            
            <h2 className="text-base font-bold text-neutral-900 pt-4">1. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you register on our platform, apply for jobs, sign up for coding bootcamps, or express an interest in obtaining information about our IT consulting services.
            </p>
            
            <h2 className="text-base font-bold text-neutral-900 pt-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide, operate, and maintain our platform and consulting systems.</li>
              <li>To improve, personalize, and expand our educational services and bootcamps.</li>
              <li>To understand and analyze how you use our recruitment portal.</li>
              <li>To process applications, coordinate interviews, and manage hiring pipelines.</li>
            </ul>

            <h2 className="text-base font-bold text-neutral-900 pt-4">3. Data Protection & Security</h2>
            <p>
              We implement industry-standard technical and organizational security measures designed to protect the security of any personal information we process. However, please remember that no method of transmission over the Internet is 100% secure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
