import React from 'react';
import { TechStackGrid } from '@/components/services/TechStackGrid';
import SEOHead from '@/app/SEOHead';

export const TechnologiesPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Technology Stack" description="Explore the framework capabilities and code libraries used in Ascope Tech architectures." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-5xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Developer Matrix</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Our Technology Stack
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              We leverage modern, durable, and secure frameworks to build scalable frontend applications, cloud environments, and vector networks.
            </p>
          </div>

          {/* Tech grid */}
          <section className="pt-6">
            <TechStackGrid />
          </section>

        </div>
      </div>
    </>
  );
};
export default TechnologiesPage;
