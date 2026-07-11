export interface PlatformUser {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'HR' | 'Recruiter' | 'Candidate';
  status: 'Active' | 'Inactive';
  lastActive: string;
}

export interface Permission {
  id: string;
  name: string;
  description: string;
}

export interface DepartmentNode {
  id: string;
  name: string;
  subDepartments?: DepartmentNode[];
}

export interface CompanySettings {
  companyName: string;
  supportEmail: string;
  domainUrl: string;
  retentionDays: number;
  aiScreenerActive: boolean;
}

export const mockAdminUsers: PlatformUser[] = [
  { id: "usr-1", name: "Alex Mercer", email: "alex.mercer@ascope.tech", role: "Admin", status: "Active", lastActive: "2026-07-08 16:30" },
  { id: "usr-2", name: "Diana Prince", email: "diana.prince@ascope.tech", role: "HR", status: "Active", lastActive: "2026-07-08 14:15" },
  { id: "usr-3", name: "Kaelen Vance", email: "kaelen.vance@ascope.tech", role: "Recruiter", status: "Active", lastActive: "2026-07-08 15:45" },
  { id: "usr-4", name: "Sarah Connor", email: "sarah@cyberdyne.com", role: "Candidate", status: "Active", lastActive: "2026-07-08 12:00" },
  { id: "usr-5", name: "John Watson", email: "john.watson@bakerstreet.com", role: "Candidate", status: "Active", lastActive: "2026-07-07 18:20" },
  { id: "usr-6", name: "Marvin Android", email: "marvin@paranoid.com", role: "Candidate", status: "Inactive", lastActive: "2026-06-30 09:00" }
];

export const mockPermissions: Permission[] = [
  { id: "perm-jobs-view", name: "View Jobs", description: "Allows viewing open job postings." },
  { id: "perm-jobs-edit", name: "Edit Jobs", description: "Allows creating, updating, and archiving job listings." },
  { id: "perm-candidates-view", name: "View Candidates", description: "Allows searching and viewing candidate resumes." },
  { id: "perm-candidates-evaluate", name: "Evaluate Candidates", description: "Allows grading scores, adding reviews, or running AI matches." },
  { id: "perm-interviews-schedule", name: "Schedule Interviews", description: "Allows setting up panel slots on calendars." },
  { id: "perm-system-settings", name: "Modify System Settings", description: "Allows adjusting general configurations and permissions mappings." }
];

export const mockRolePermissions: Record<string, string[]> = {
  Admin: ["perm-jobs-view", "perm-jobs-edit", "perm-candidates-view", "perm-candidates-evaluate", "perm-interviews-schedule", "perm-system-settings"],
  HR: ["perm-jobs-view", "perm-jobs-edit", "perm-candidates-view", "perm-candidates-evaluate", "perm-interviews-schedule"],
  Recruiter: ["perm-jobs-view", "perm-candidates-view", "perm-candidates-evaluate", "perm-interviews-schedule"],
  Candidate: ["perm-jobs-view"]
};

export const mockDepartmentTree: DepartmentNode[] = [
  {
    id: "dept-corp",
    name: "Corporate Headquarters",
    subDepartments: [
      {
        id: "dept-ops",
        name: "Operations & HR Division",
        subDepartments: [
          { id: "dept-recruiting", name: "Recruitment Coordination Agency" },
          { id: "dept-welfare", name: "Employee Experience Group" }
        ]
      },
      {
        id: "dept-engineering",
        name: "Engineering & Innovation Lab",
        subDepartments: [
          { id: "dept-frontend", name: "UI Frameworks & Visual Design Group" },
          { id: "dept-backend", name: "Distributed Infrastructure & Databases" },
          { id: "dept-ai", name: "Large Language Networks & Fine-Tuning" }
        ]
      }
    ]
  }
];

export const mockMasterSkills: string[] = [
  "React 19", "Next.js", "TypeScript", "Tailwind CSS v4", "Framer Motion",
  "Node.js", "Express", "Docker", "Kubernetes", "AWS Cloud", "Google Cloud",
  "Terraform IaC", "Python", "PyTorch", "Vector Databases", "LLM Fine-Tuning",
  "Elasticsearch", "PostgreSQL", "Redis Cache", "OAuth Security"
];

export const defaultCompanySettings: CompanySettings = {
  companyName: "Ascope Tech Solutions Ltd.",
  supportEmail: "support@ascope.tech",
  domainUrl: "https://ascope.tech",
  retentionDays: 90,
  aiScreenerActive: true
};

export const mockSystemTelemetry = [
  { date: "July 01", cpuLoad: 24, memLoad: 42, activeUsers: 34 },
  { date: "July 02", cpuLoad: 28, memLoad: 45, activeUsers: 40 },
  { date: "July 03", cpuLoad: 35, memLoad: 50, activeUsers: 58 },
  { date: "July 04", cpuLoad: 18, memLoad: 38, activeUsers: 22 },
  { date: "July 05", cpuLoad: 22, memLoad: 40, activeUsers: 28 },
  { date: "July 06", cpuLoad: 48, memLoad: 64, activeUsers: 84 },
  { date: "July 07", cpuLoad: 52, memLoad: 68, activeUsers: 92 },
  { date: "July 08", cpuLoad: 45, memLoad: 65, activeUsers: 87 }
];
