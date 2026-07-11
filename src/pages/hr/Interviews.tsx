import React from 'react';
import { mockCandidates } from '@/mocks/candidates';
import { mockInterviewSlots } from '@/mocks/interview-slots';
import { InterviewSchedulerCalendar } from '@/components/hr/InterviewSchedulerCalendar';
import SEOHead from '@/app/SEOHead';

export const InterviewsPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Interview Panel Scheduler" description="Coordinate panel interviews, check calendar slots, and solve conflicts." />
      <div className="py-12 bg-surface/30">
        <div className="app-container max-w-6xl space-y-8 animate-in fade-in duration-300">
          
          {/* Header */}
          <div className="space-y-1">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">HR Panels Control</span>
            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
              Interview Scheduler
            </h1>
            <p className="text-xs text-text-muted">Book conflict-free panels and manage active weekly calendars.</p>
          </div>

          {/* Interactive Scheduler Calendar Component */}
          <InterviewSchedulerCalendar
            candidates={mockCandidates}
            initialSlots={mockInterviewSlots}
          />

        </div>
      </div>
    </>
  );
};
export default InterviewsPage;
