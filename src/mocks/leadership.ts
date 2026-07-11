export interface LeaderProfile {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  linkedin: string;
}

export const mockLeadership: LeaderProfile[] = [
  {
    name: "Dr. Karthikeyan Vasudevan",
    role: "Chief Executive Officer & Founder",
    avatar: "KV",
    bio: "Ex-Google Staff Engineer. Holds a PhD in Distributed Systems. Passionate about reforming professional tech bootcamps and building resilient cloud software systems.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Aishwarya Srinivasan",
    role: "Chief Operating Officer",
    avatar: "AS",
    bio: "Over 15 years directing enterprise client deliveries. Spearheads Ascope Tech's IT Services division and international agency partnerships.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Devarajan Chandrasekhar",
    role: "Head of Professional Education",
    avatar: "DC",
    bio: "Former Director of Engineering at major EdTech programs. Curated Ascope Academy's curricula, placing over 5,000 candidates globally.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Nandini Balakrishnan",
    role: "VP of Recruitment & Talent Match",
    avatar: "NB",
    bio: "Technical HR veteran. Designed our proprietary AI-assisted matching logic, pairing elite tech applicants with enterprise vacancies.",
    linkedin: "https://linkedin.com"
  }
];
export default mockLeadership;
