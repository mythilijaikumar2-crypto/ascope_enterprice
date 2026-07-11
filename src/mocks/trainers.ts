export interface Trainer {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
  linkedin: string;
}

export const mockTrainers: Trainer[] = [
  {
    id: "tr-1",
    name: "Ananthakrishnan Swaminathan",
    role: "Lead Fullstack Instructor",
    bio: "Ex-Netflix Staff Engineer. Over 10 years of commercial React, Node.js, and TypeScript scaling experience.",
    avatar: "AS",
    skills: ["React 19", "TypeScript", "Node.js", "GraphQL", "Tailwind CSS"],
    linkedin: "https://linkedin.com"
  },
  {
    id: "tr-2",
    name: "Dr. Eshwari Ramesh",
    role: "VP of Distributed Computing & Academy Tutor",
    bio: "Core contributor to major container registries. Specializes in Docker, Kubernetes, AWS architectures, and CI/CD operations.",
    avatar: "ER",
    skills: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Terraform"],
    linkedin: "https://linkedin.com"
  },
  {
    id: "tr-3",
    name: "Kalyanaraman Venkataraman",
    role: "Director of AI Research & Lead Trainer",
    bio: "PhD in AI systems. Specialized in training enterprise teams in deep learning networks and integrations.",
    avatar: "KV",
    skills: ["Python", "TensorFlow", "PyTorch", "LLM Fine-Tuning", "Vector Databases"],
    linkedin: "https://linkedin.com"
  },
  {
    id: "tr-4",
    name: "Deepika Parthiban",
    role: "Senior Cybersecurity Instructor",
    bio: "Former Threat Analyst at national security agencies. Teaches penetration testing, secure scopes, and systems hardening.",
    avatar: "DP",
    skills: ["Penetration Testing", "Network Security", "Cryptography", "OWASP Top 10"],
    linkedin: "https://linkedin.com"
  }
];
export default mockTrainers;
