export interface CandidateProfile {
  name: string;
  email: string;
  phone: string;
  title: string;
  bio: string;
  avatar: string;
  hasPhoto: boolean;
  resumeFileName: string | null;
  resumeFileSize: string | null;
  skills: string[];
  emailVerified: boolean;
}

export const defaultCandidateProfile: CandidateProfile = {
  name: "Sarah Connor",
  email: "sarah@cyberdyne.com",
  phone: "+1 (555) 0199",
  title: "Full-Stack Software Engineer",
  bio: "Passionate developer focused on building secure React dashboards and Cloud DevOps pipelines. Active contributor to open-source system security packages.",
  avatar: "SC",
  hasPhoto: true,
  resumeFileName: "Sarah_Connor_Resume.pdf",
  resumeFileSize: "245 KB",
  skills: ["React 19", "TypeScript", "Tailwind CSS", "Node.js"],
  emailVerified: true
};
export default defaultCandidateProfile;
