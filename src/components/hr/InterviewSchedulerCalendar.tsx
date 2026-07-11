import React, { useState } from 'react';
import { Calendar, Clock, AlertTriangle, UserCheck, Plus } from 'lucide-react';
import { Select, Button, useToast } from '@/components/ui';
import type { InterviewSlot } from '@/mocks/interview-slots';
import type { CandidateRecord } from '@/mocks/candidates';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export interface InterviewSchedulerCalendarProps {
  candidates: CandidateRecord[];
  initialSlots: InterviewSlot[];
}

export const InterviewSchedulerCalendar: React.FC<InterviewSchedulerCalendarProps> = ({
  candidates,
  initialSlots
}) => {
  const { toast } = useToast();
  const [slots, setSlots] = useState<InterviewSlot[]>(initialSlots);
  const [selectedCandidate, setSelectedCandidate] = useState(candidates[0]?.id || '');
  const [selectedInterviewer, setSelectedInterviewer] = useState('Alex Mercer (Lead Fullstack)');
  const [selectedDate, setSelectedDate] = useState('2026-07-12');
  const [selectedTime, setSelectedTime] = useState('10:00');
  const [conflictError, setConflictError] = useState<string | null>(null);

  const handleBookSlot = (e: React.FormEvent) => {
    e.preventDefault();
    setConflictError(null);

    // Conflict Check logic: matches date + time + interviewer
    const hasConflict = slots.some(
      (slot) =>
        slot.date === selectedDate &&
        slot.time === selectedTime &&
        slot.interviewerName === selectedInterviewer
    );

    if (hasConflict) {
      setConflictError(
        `Staff conflict detected: ${selectedInterviewer} is already booked on ${selectedDate} at ${selectedTime}. Select another date, time, or interviewer.`
      );
      return;
    }

    // Retrieve candidate name
    const candidate = candidates.find((c) => c.id === selectedCandidate);
    const candidateName = candidate ? candidate.name : 'Unknown Candidate';

    const newSlot: InterviewSlot = {
      id: `slot-${Date.now()}`,
      candidateName,
      interviewerName: selectedInterviewer,
      date: selectedDate,
      time: selectedTime
    };

    setSlots((prev) => [...prev, newSlot]);
    toast({
      title: "Interview Scheduled",
      description: `Interview booked with ${candidateName} on ${selectedDate} at ${selectedTime}.`,
      variant: "success"
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
      
      {/* Booking Form Card */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Schedule Interview</CardTitle>
          <CardDescription>Select parameters and book conflict-free panel interviews.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleBookSlot} className="space-y-4">
            
            {/* Candidate */}
            <div className="space-y-1.5">
              <label htmlFor="sched-candidate" className="text-[10px] font-bold text-neutral-700">Select Candidate</label>
              <Select
                id="sched-candidate"
                value={selectedCandidate}
                onChange={(e) => setSelectedCandidate(e.target.value)}
              >
                {candidates.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.title})
                  </option>
                ))}
              </Select>
            </div>

            {/* Interviewer */}
            <div className="space-y-1.5">
              <label htmlFor="sched-interviewer" className="text-[10px] font-bold text-neutral-700">Select Interviewer</label>
              <Select
                id="sched-interviewer"
                value={selectedInterviewer}
                onChange={(e) => setSelectedInterviewer(e.target.value)}
              >
                <option value="Alex Mercer (Lead Fullstack)">Alex Mercer (Lead Fullstack)</option>
                <option value="Diana Prince (Cybersec)">Diana Prince (Cybersec)</option>
                <option value="Kaelen Vance (AI Specialist)">Kaelen Vance (AI Specialist)</option>
                <option value="Dr. Elena Rostova (DevOps)">Dr. Elena Rostova (DevOps)</option>
              </Select>
            </div>

            {/* Date and Time slots */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="sched-date" className="text-[10px] font-bold text-neutral-700">Select Date</label>
                <Select
                  id="sched-date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                >
                  <option value="2026-07-12">July 12, 2026</option>
                  <option value="2026-07-13">July 13, 2026</option>
                  <option value="2026-07-14">July 14, 2026</option>
                </Select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="sched-time" className="text-[10px] font-bold text-neutral-700">Select Time</label>
                <Select
                  id="sched-time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                </Select>
              </div>
            </div>

            {/* Conflict Warn display */}
            {conflictError && (
              <div className="p-3 border border-error/20 bg-error-50/15 text-error rounded-xl flex gap-2 text-xs leading-relaxed">
                <AlertTriangle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
                <span>{conflictError}</span>
              </div>
            )}

            <Button type="submit" className="w-full flex items-center justify-center gap-1.5">
              <Plus className="h-4.5 w-4.5" />
              Book Interview Slot
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Booked calendar roster */}
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Interview Calendar Roster</CardTitle>
          <CardDescription>Scheduled slots roster including pre-booked slots for conflict audits.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {slots.length === 0 ? (
            <p className="text-xs text-text-light italic text-center py-6">No interviews scheduled.</p>
          ) : (
            slots.map((slot) => (
              <div
                key={slot.id}
                className="p-4 border border-border bg-white rounded-xl flex items-center justify-between gap-4 hover:border-primary/20 transition-all duration-300 shadow-premium-sm"
              >
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-neutral-800 leading-snug">
                    {slot.candidateName}
                  </h4>
                  <div className="flex flex-wrap gap-x-3 text-[10px] text-text-muted font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-neutral-400" />
                      {slot.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-neutral-400" />
                      {slot.time}
                    </span>
                  </div>
                  <p className="text-[10px] text-primary font-semibold">
                    Interviewer: {slot.interviewerName}
                  </p>
                </div>
                <div className="p-2 bg-success-50 border border-success/15 rounded-xl text-success shrink-0">
                  <UserCheck className="h-4.5 w-4.5" />
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>

    </div>
  );
};
export default InterviewSchedulerCalendar;
