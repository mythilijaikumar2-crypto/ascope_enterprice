import React from 'react';
import SEOHead from '@/app/SEOHead';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead title="About Us" description="Read the history, values, and client dedication of Ascope Tech enterprise platforms." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-4xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Our Story</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              About Ascope Tech
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              Founded in 2021, Ascope Tech was created to solve the dual challenge of tech candidate recruitment and corporate software modernization.
            </p>
          </div>

          {/* Grid details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-neutral-800 tracking-tight">
                Our Origin & Philosophy
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                As software engineers, we saw how often companies struggled to hire developers with actual practical training, while bootcamp graduates struggled to find jobs without commercial project experience. We decided to build a platform that bridges these requirements.
              </p>
              <p className="text-xs text-text-muted leading-relaxed">
                By operating our own professional coding academy alongside a dedicated enterprise consulting division, we create a circular talent ecosystem. Our students practice on mock commercial requirements, and our recruiters match top alumni directly to client openings.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-neutral-800 tracking-tight">
                Core Core Values
              </h3>
              <div className="space-y-3">
                <div className="p-4 border border-border bg-white rounded-xl">
                  <h4 className="text-xs font-bold text-neutral-800 mb-1">Continuous Learning</h4>
                  <p className="text-[10px] text-text-muted leading-relaxed">Technology shifts weekly. We dedicate hours to training, certifications, and updates.</p>
                </div>
                <div className="p-4 border border-border bg-white rounded-xl">
                  <h4 className="text-xs font-bold text-neutral-800 mb-1">Extreme Transparency</h4>
                  <p className="text-[10px] text-text-muted leading-relaxed">Honest scopes, visual progression boards, and open communication channels.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
export default AboutPage;
