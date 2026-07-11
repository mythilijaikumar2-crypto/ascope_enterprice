import React from 'react';
import { Target, Compass, Heart } from 'lucide-react';
import SEOHead from '@/app/SEOHead';
import { Card } from '@/components/ui/card';

export const VisionMissionPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Vision & Mission" description="Read about our corporate goals, values, and ethics at Ascope Tech." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-4xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Future Outlook</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Vision & Mission
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-lg mx-auto">
              Our goal is to build a worldwide technology services and professional placement network rooted in excellence and accessible bootcamps.
            </p>
          </div>

          {/* Core Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <Card className="p-6 space-y-3">
              <div className="p-2.5 bg-primary-50 text-primary w-fit rounded-xl">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-800 tracking-tight">Our Mission</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                To build next-generation B2B software solutions while training prospective candidates in real-world environments, accelerating careers globally.
              </p>
            </Card>

            <Card className="p-6 space-y-3">
              <div className="p-2.5 bg-info/10 text-info w-fit rounded-xl">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-800 tracking-tight">Our Vision</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                A world where high-end technology services and technical software academies operate as a unified, circular placement ecosystem.
              </p>
            </Card>

            <Card className="p-6 space-y-3">
              <div className="p-2.5 bg-success/10 text-success w-fit rounded-xl">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-800 tracking-tight">Core Value</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Focus on user accessibility, software durability, client transparency, and supporting candidates in securing high-income placements.
              </p>
            </Card>
          </div>

        </div>
      </div>
    </>
  );
};
export default VisionMissionPage;
