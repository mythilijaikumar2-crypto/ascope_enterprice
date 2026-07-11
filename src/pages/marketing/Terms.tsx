import React from 'react';
import SEOHead from '@/app/SEOHead';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Terms of Service" description="Terms of service and user agreements of Ascope Tech." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-3xl space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Legal</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs text-text-muted">Last Updated: July 2026</p>
          </div>
          
          <div className="prose prose-neutral text-xs text-text-muted space-y-6 leading-relaxed">
            <p>
              Welcome to Ascope Tech. These terms and conditions outline the rules and regulations for the use of Ascope Tech's Website and integrated enterprise services.
            </p>
            
            <h2 className="text-base font-bold text-neutral-900 pt-4">1. Acceptance of Terms</h2>
            <p>
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use Ascope Tech if you do not agree to take all of the terms and conditions stated on this page.
            </p>
            
            <h2 className="text-base font-bold text-neutral-900 pt-4">2. Services & Training Accounts</h2>
            <p>
              When you create an account in our candidate portal, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.
            </p>

            <h2 className="text-base font-bold text-neutral-900 pt-4">3. Intellectual Property</h2>
            <p>
              Unless otherwise stated, Ascope Tech and/or its licensors own the intellectual property rights for all material on Ascope Tech. All intellectual property rights are reserved. You must not copy, reproduce, republish, or redistribute our course materials or custom codebase features without explicit permission.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
