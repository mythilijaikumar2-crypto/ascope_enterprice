import React from 'react';
import { mockCertifications } from '@/mocks/certifications';
import { CertificationBadgeGrid } from '@/components/education/CertificationBadgeGrid';
import { ShieldCheck } from 'lucide-react';
import SEOHead from '@/app/SEOHead';
import { Card } from '@/components/ui/card';

export const CertificationsPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Academy Certifications" description="Verify course graduation pathways and certifications criteria." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-4xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Accreditation</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Professional Certifications
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              Our certifications validate hands-on execution of software architectures, cloud deployments, and AI integrations.
            </p>
          </div>

          {/* Badge Showcase */}
          <section className="space-y-6">
            <h2 className="text-lg font-bold text-neutral-800 tracking-tight">Available Credentials</h2>
            <CertificationBadgeGrid certifications={mockCertifications} />
          </section>

          {/* Validation Processes */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border/80">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-neutral-800 tracking-tight">Verification Guidelines</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Every credential issued by Ascope Tech is cryptographically registered on our internal ledger database. Recruiters can verify a candidate's credentials using their unique registration ID via our corporate search tools.
              </p>
            </div>
            
            <Card className="p-5 flex gap-3 text-xs bg-white">
              <ShieldCheck className="h-6 w-6 text-success shrink-0" />
              <div className="space-y-1.5">
                <h4 className="font-bold text-neutral-800">Tamper-Proof Ledger</h4>
                <p className="text-text-muted leading-relaxed">
                  Graduates receive PDF transcripts linked directly to unique credentials keys. This protects credential integrity for hiring managers.
                </p>
              </div>
            </Card>
          </section>

        </div>
      </div>
    </>
  );
};
export default CertificationsPage;
