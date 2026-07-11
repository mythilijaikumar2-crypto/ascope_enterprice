export interface LeaderProfile {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  linkedin: string;
}

export const mockLeadership: LeaderProfile[] = [
  {
    name: "Alex Sterling",
    role: "CEO & Founder",
    avatar: "AS",
    bio: "Former Principal Architect at Google with 15+ years scaling web infrastructure and leading enterprise product deployments.",
    linkedin: "https://www.linkedin.com/company/ascope-tech-private-limited/"
  },
  {
    name: "Elena Rostova",
    role: "Head of Design",
    avatar: "ER",
    bio: "Award-winning designer passionate about building sleek, accessible user interfaces and structured corporate design systems.",
    linkedin: "https://www.linkedin.com/company/ascope-tech-private-limited/"
  },
  {
    name: "Marcus Vance",
    role: "Director of DevOps",
    avatar: "MV",
    bio: "Kubernetes core contributor specializing in automated, zero-downtime scaling systems and secure multi-cloud architectures.",
    linkedin: "https://www.linkedin.com/company/ascope-tech-private-limited/"
  }
];

export default mockLeadership;
