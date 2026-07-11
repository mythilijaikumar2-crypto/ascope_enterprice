export interface Trainer {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  bio: string;
  skills: string[];
  linkedin: string;
  bgClass: string;
  avatarIcon: string; // 'code' | 'server' | 'palette' | 'trending-up' | 'brain' | 'shield'
  floatingIcons: string[]; // array of icon names to render in the banner
  avatar: string; // Initials to support legacy references
}

export const mockTrainers: Trainer[] = [
  {
    id: "tr-1",
    name: "Mr Aswinraj",
    role: "Senior Full Stack Developer",
    affiliation: "Zoho - Software Developer Engineer",
    bio: "Core full-stack veteran designing high-performance enterprise engines. Guides candidates in deep React, API lifecycles, and cloud integrations.",
    skills: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    linkedin: "https://www.linkedin.com/company/ascope-tech-private-limited/",
    bgClass: "bg-[#0f172a]",
    avatarIcon: "code",
    floatingIcons: ["Code", "Cpu", "Database", "Laptop"],
    avatar: "AR"
  },
  {
    id: "tr-2",
    name: "Ms Mahalakshmi V",
    role: "Java & DevOps Expert",
    affiliation: "LT Mindtree - 2 Years Experience",
    bio: "Specializes in secure scalable backends and automatic pipelines orchestration. Guides core Spring, Hibernate, and Jenkins workflows.",
    skills: ["Java", "Spring Boot", "Jenkins", "DevOps", "SQL"],
    linkedin: "https://www.linkedin.com/company/ascope-tech-private-limited/",
    bgClass: "bg-[#083344]",
    avatarIcon: "server",
    floatingIcons: ["Coffee", "Server", "Cloud", "GitBranch"],
    avatar: "MV"
  },
  {
    id: "tr-3",
    name: "Mr Keerthivasan VR",
    role: "UI/UX Design & Marketing Specialist",
    affiliation: "Ex-Infinity Notion - 5 Years Experience",
    bio: "Passionate interface architect and content strategist. Teaches Figma design systems, wireframing, usability tests, and SEO campaigns.",
    skills: ["Figma", "Adobe XD", "Prototyping", "Research", "SEO"],
    linkedin: "https://www.linkedin.com/company/ascope-tech-private-limited/",
    bgClass: "bg-[#581c87]",
    avatarIcon: "palette",
    floatingIcons: ["Palette", "Layers", "Eye", "Compass"],
    avatar: "KV"
  },
  {
    id: "tr-4",
    name: "Priya",
    role: "Business Analytics Expert",
    affiliation: "LT Mindtree - 2 Years Experience",
    bio: "Transforms complex raw datasets into clear strategic visual business decisions. Guides Tableau, Excel mappings, and Agile project tracking.",
    skills: ["Excel", "Tableau", "SAP", "JIRA", "Scrum"],
    linkedin: "https://www.linkedin.com/company/ascope-tech-private-limited/",
    bgClass: "bg-[#064e3b]",
    avatarIcon: "trending-up",
    floatingIcons: ["TrendingUp", "PieChart", "FileSpreadsheet", "Briefcase"],
    avatar: "PR"
  },
  {
    id: "tr-5",
    name: "Ms Yashmeen",
    role: "Data Science Lead",
    affiliation: "Trainer On Ascope Tech",
    bio: "Deep learning engineer constructing modern mathematical predictive models. Guides Pandas pipelines, TensorFlow runs, and Power BI dashboards.",
    skills: ["Python", "ML", "TensorFlow", "SQL", "Power BI"],
    linkedin: "https://www.linkedin.com/company/ascope-tech-private-limited/",
    bgClass: "bg-[#064e3b]",
    avatarIcon: "brain",
    floatingIcons: ["Brain", "Database", "LineChart", "Cpu"],
    avatar: "YS"
  },
  {
    id: "tr-6",
    name: "Ms Brindha A",
    role: "Junior Full Stack Developer",
    affiliation: "Ascope Tech - Core Developer",
    bio: "Core platform engineer focusing on responsive clients. Guides responsive Tailwind, Express setups, and Git code coordination.",
    skills: ["React", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "Git"],
    linkedin: "https://www.linkedin.com/company/ascope-tech-private-limited/",
    bgClass: "bg-[#075a97]",
    avatarIcon: "code",
    floatingIcons: ["Code", "Laptop", "Terminal", "GitFork"],
    avatar: "BA"
  },
  {
    id: "tr-7",
    name: "Ms Dharshini S",
    role: "Data Science & ML Specialist",
    affiliation: "Ascope Tech - AI Specialist",
    bio: "AI research engineer focusing on predictive logic. Guides exploratory analysis workflows and Scikit-Learn validation metrics.",
    skills: ["Python", "Machine Learning", "Data Analytics", "Pandas", "SQL", "Scikit-Learn"],
    linkedin: "https://www.linkedin.com/company/ascope-tech-private-limited/",
    bgClass: "bg-[#064e3b]",
    avatarIcon: "trending-up",
    floatingIcons: ["LineChart", "Database", "BarChart3", "Binary"],
    avatar: "DS"
  },
  {
    id: "tr-8",
    name: "Mr Sathiyanarayana J",
    role: "Cybersecurity & Ethical Hacking Lead",
    affiliation: "Ascope Tech - Security Lead",
    bio: "Vulnerability threat analyst hardening network layouts. Guides Linux scripting, Wireshark sniffing, and Metasploit payload diagnostics.",
    skills: ["Ethical Hacking", "Penetration Testing", "Linux", "Network Security", "Wireshark", "Metasploit"],
    linkedin: "https://www.linkedin.com/company/ascope-tech-private-limited/",
    bgClass: "bg-[#6366f1]",
    avatarIcon: "shield",
    floatingIcons: ["Shield", "Lock", "Terminal", "Network"],
    avatar: "SJ"
  }
];

export default mockTrainers;
