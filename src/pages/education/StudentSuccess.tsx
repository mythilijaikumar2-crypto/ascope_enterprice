import React from 'react';
import { mockSuccessStories } from '@/mocks/success-stories';
import { SuccessStoryCard } from '@/components/education/SuccessStoryCard';
import SEOHead from '@/app/SEOHead';

export const StudentSuccessPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Student Success Stories" description="Read testimonials and placements stats of our academy graduates." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-4xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Alumni Outcomes</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Student Success Stories
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              Read how our intensive engineering bootcamps have helped students transition into high-income technology roles.
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {mockSuccessStories.map((story) => (
              <SuccessStoryCard key={story.id} story={story} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
};
export default StudentSuccessPage;
