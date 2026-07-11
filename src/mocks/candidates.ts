export interface CandidateRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  department: 'Engineering' | 'Design' | 'Product' | 'Marketing';
  status: 'Applied' | 'Screening' | 'Interviewing' | 'Offered' | 'Closed';
  skills: string[];
  resumeFileName: string;
  resumeFileSize: string;
  appliedDate: string;
  score: number; // AI score match, e.g. 85
}

export const mockCandidates: CandidateRecord[] = [
  {
    id: "cand-1",
    name: "Sandhya Krishnan",
    email: "sandhya@ascope.com",
    phone: "+91 94440 12345",
    title: "Full-Stack Software Engineer",
    department: "Engineering",
    status: "Interviewing",
    skills: ["React 19", "TypeScript", "Tailwind CSS", "Node.js"],
    resumeFileName: "Sandhya_Krishnan_Resume.pdf",
    resumeFileSize: "245 KB",
    appliedDate: "2026-07-01",
    score: 92
  },
  {
    id: "cand-2",
    name: "Jagadeeshwaran Pillai",
    email: "jagadeesh@ascope.com",
    phone: "+91 98401 54321",
    title: "Junior Frontend Developer",
    department: "Engineering",
    status: "Applied",
    skills: ["React 19", "JavaScript", "HTML/CSS"],
    resumeFileName: "Jagadeesh_Pillai_CV.pdf",
    resumeFileSize: "185 KB",
    appliedDate: "2026-07-03",
    score: 75
  },
  {
    id: "cand-3",
    name: "Siddharth Srinivasan",
    email: "siddharth@ascope.com",
    phone: "+91 94451 98765",
    title: "Lead AI Specialist",
    department: "Engineering",
    status: "Offered",
    skills: ["Python", "PyTorch", "LLM Fine-Tuning", "Vector Databases"],
    resumeFileName: "Siddharth_Srinivasan_AI.pdf",
    resumeFileSize: "310 KB",
    appliedDate: "2026-06-20",
    score: 98
  },
  {
    id: "cand-4",
    name: "Indira Ramanathan",
    email: "indira@ascope.com",
    phone: "+91 98840 67890",
    title: "Senior Product Designer",
    department: "Design",
    status: "Screening",
    skills: ["Figma Prototyping", "Design Systems Tokens", "UI Wireframes"],
    resumeFileName: "Indira_Ramanathan_Portfolio.pdf",
    resumeFileSize: "420 KB",
    appliedDate: "2026-06-28",
    score: 87
  },
  {
    id: "cand-5",
    name: "Arunachalam Murugan",
    email: "arun@ascope.com",
    phone: "+91 90030 11111",
    title: "Product Manager Coordinator",
    department: "Product",
    status: "Applied",
    skills: ["Agile Scrum", "Jira boards", "Requirements Specs"],
    resumeFileName: "Arunachalam_Murugan_Resume.pdf",
    resumeFileSize: "150 KB",
    appliedDate: "2026-07-05",
    score: 68
  },
  {
    id: "cand-6",
    name: "Hariharan Prasad",
    email: "hari@ascope.com",
    phone: "+91 91760 22222",
    title: "Growth Marketing Lead",
    department: "Marketing",
    status: "Interviewing",
    skills: ["SEO Auditing", "Google Analytics", "Email qualifiers"],
    resumeFileName: "Hariharan_Prasad_Growth.pdf",
    resumeFileSize: "215 KB",
    appliedDate: "2026-06-25",
    score: 82
  },
  {
    id: "cand-7",
    name: "Thangam Muthusamy",
    email: "thangam@ascope.com",
    phone: "+91 98420 33333",
    title: "Data Analyst Specialist",
    department: "Product",
    status: "Screening",
    skills: ["SQL Matrix", "Data Visualization", "Python Scripts"],
    resumeFileName: "Thangam_Muthusamy_CV.pdf",
    resumeFileSize: "195 KB",
    appliedDate: "2026-07-02",
    score: 84
  },
  {
    id: "cand-8",
    name: "Madhavan Nambiar",
    email: "madhavan@ascope.com",
    phone: "+91 95000 44444",
    title: "AWS DevOps Engineer",
    department: "Engineering",
    status: "Closed",
    skills: ["AWS Clusters", "Kubernetes Pods", "Docker Configs"],
    resumeFileName: "Madhavan_DevOps_Resume.pdf",
    resumeFileSize: "340 KB",
    appliedDate: "2026-06-15",
    score: 91
  }
];
export default mockCandidates;
