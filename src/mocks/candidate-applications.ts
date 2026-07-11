export type ApplicationStep = 'Applied' | 'Screening' | 'Interviewing' | 'Offered' | 'Closed';

export interface CandidateApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  companyName: string;
  department: string;
  location: string;
  appliedDate: string;
  status: ApplicationStep;
  nextAction: string | null;
}

export const mockCandidateApplications: CandidateApplication[] = [
  {
    id: "app-1",
    jobId: "job-1",
    jobTitle: "Senior Frontend Engineer (React 19 / Vite)",
    companyName: "Ascope Tech Consulting",
    department: "Engineering",
    location: "San Francisco, CA (Hybrid)",
    appliedDate: "2026-07-01",
    status: "Interviewing",
    nextAction: "Panel Interview scheduled for July 12, 10:00 AM."
  },
  {
    id: "app-2",
    jobId: "job-4",
    jobTitle: "Senior Product Designer",
    companyName: "Helius Technologies (Partner)",
    department: "Design",
    location: "New York, NY (Hybrid)",
    appliedDate: "2026-06-25",
    status: "Screening",
    nextAction: "Portfolio evaluation in progress."
  }
];
export default mockCandidateApplications;
