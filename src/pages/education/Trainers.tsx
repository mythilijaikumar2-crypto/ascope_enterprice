import React from 'react';
import { mockTrainers } from '@/mocks/trainers';
import { TrainerCard } from '@/components/education/TrainerCard';
import SEOHead from '@/app/SEOHead';

export const TrainersPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Academy Trainers" description="Meet our senior software engineering mentors and academy trainers." />
      <div className="py-16 bg-surface/30">
        <div className="app-container max-w-4xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Expert Faculty</span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
              Meet our Instructors
            </h1>
            <p className="text-sm text-text-muted leading-relaxed max-w-lg mx-auto">
              Our courses are led by seasoned engineering veterans who have worked in leading organizations like Netflix and Google.
            </p>
          </div>

          {/* Grid list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            {mockTrainers.map((trainer) => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
};
export default TrainersPage;
