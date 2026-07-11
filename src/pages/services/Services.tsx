import React from 'react';
import { mockServices } from '@/mocks/services';
import { ServiceCard } from '@/components/services/ServiceCard';
import SEOHead from '@/app/SEOHead';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead title="IT Consulting Services" description="Compare our bespoke software development, cloud infrastructure operations, and AI integration services." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-5xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Enterprise Services</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Bespoke Software Consulting
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              We design, build, and deploy premium enterprise web architectures, automated cloud operations, and custom intelligence tools.
            </p>
          </div>

          {/* Grid listing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {mockServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
};
export default ServicesPage;
