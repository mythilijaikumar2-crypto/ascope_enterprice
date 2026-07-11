export interface InterviewSlot {
  id: string;
  candidateName: string;
  interviewerName: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM (24-hour style, e.g. "10:00")
}

export const mockInterviewSlots: InterviewSlot[] = [
  {
    id: "slot-1",
    candidateName: "Sarah Connor",
    interviewerName: "Alex Mercer (Lead Fullstack)",
    date: "2026-07-12",
    time: "10:00"
  },
  {
    id: "slot-2",
    candidateName: "Ford Prefect",
    interviewerName: "Diana Prince (Cybersec)",
    date: "2026-07-12",
    time: "14:00"
  },
  {
    id: "slot-3",
    candidateName: "Sherlock Holmes",
    interviewerName: "Kaelen Vance (AI Specialist)",
    date: "2026-07-13",
    time: "11:00"
  }
];
export default mockInterviewSlots;
