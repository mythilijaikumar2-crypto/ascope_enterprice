import React from 'react';
import { ShieldCheck, MessageCircle, FileText, Globe } from 'lucide-react';
import { ContactSalesForm } from '@/components/services/ContactSalesForm';
import { Card, CardContent } from '@/components/ui/card';
import SEOHead from '@/app/SEOHead';

export const ContactSalesPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Contact Sales" description="Submit your project requirements and receive custom enterprise software consulting scopes." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-5xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Enterprise Sales</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Request Project Scope Proposal
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              Provide your details and software requirements. We'll evaluate parameters and schedule a review call.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start pt-6">
            
            {/* Sales Form Panel */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-6">
                  <ContactSalesForm />
                </CardContent>
              </Card>
            </div>

            {/* Support Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-base font-bold text-neutral-900 tracking-tight">
                    Corporate Guarantee
                  </h3>
                  
                  <div className="space-y-4 text-xs">
                    <div className="flex items-start gap-3">
                      <MessageCircle className="h-5 w-5 text-primary shrink-0 pt-0.5" />
                      <div>
                        <span className="font-bold text-neutral-800 block">Fast Response SLA</span>
                        <p className="text-text-muted mt-0.5">We respond with preliminary project evaluations within 4 business hours.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 border-t border-neutral-100 pt-4">
                      <ShieldCheck className="h-5 w-5 text-success shrink-0 pt-0.5" />
                      <div>
                        <span className="font-bold text-neutral-800 block">NDA Readiness</span>
                        <p className="text-text-muted mt-0.5">We sign mutual NDAs before reviewing detailed backend codes or databases.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 border-t border-neutral-100 pt-4">
                      <FileText className="h-5 w-5 text-info shrink-0 pt-0.5" />
                      <div>
                        <span className="font-bold text-neutral-800 block">Transparent Scoping</span>
                        <p className="text-text-muted mt-0.5">No hidden retainer fees. Every developer sprint represents direct deliverables.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Badge */}
              <div className="p-4 border border-info/20 bg-info-50/10 rounded-2xl flex gap-3 text-xs leading-relaxed">
                <Globe className="h-5 w-5 text-info shrink-0" />
                <p className="text-text-muted">
                  <strong>Secure Architecture Guarantee:</strong> All infrastructure deployments adhere strictly to SOC 2 compliance standards.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
export default ContactSalesPage;
