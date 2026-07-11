export interface Job {
  id: string;
  title: string;
  slug: string;
  department: 'Engineering' | 'Design' | 'Product' | 'Marketing';
  experienceLevel: 'Entry' | 'Mid' | 'Senior' | 'Lead';
  location: string; // e.g. "San Francisco, CA"
  mode: 'Remote' | 'On-site' | 'Hybrid';
  salaryRange: string; // e.g. "$120,000 - $140,000"
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const mockJobs: Job[] = [
  {
    id: "job-1",
    title: "Senior Frontend Engineer (React 19 / Vite)",
    slug: "senior-frontend-engineer",
    department: "Engineering",
    experienceLevel: "Senior",
    location: "San Francisco, CA",
    mode: "Hybrid",
    salaryRange: "$140,000 - $170,000",
    description: "Join our core platforms division to build modern web interfaces utilizing React 19 concurrent features, Vite assemblies, and Tailwind CSS styles.",
    responsibilities: [
      "Develop modular frontend architectures and reusable component libraries.",
      "Conduct performance optimizations targeting LCP and INP Core Web Vitals.",
      "Work closely with UI/UX designers to translate Figma layouts into cinematic client codes."
    ],
    requirements: [
      "5+ years of commercial frontend engineering experience.",
      "Deep understanding of TypeScript strict configurations and state systems.",
      "Hands-on experience optimizing build sizes and Rolldown/Vite configurations."
    ],
    benefits: [
      "Full premium medical, dental, and vision coverages.",
      "Unlimited paid time off (PTO) with 3-week mandatory minimum.",
      "Home office setup budget ($2,000) and yearly training stipend."
    ]
  },
  {
    id: "job-2",
    title: "Cloud Infrastructure Architect",
    slug: "cloud-infrastructure-architect",
    department: "Engineering",
    experienceLevel: "Lead",
    location: "Austin, TX",
    mode: "Remote",
    salaryRange: "$160,000 - $190,000",
    description: "Lead multi-region AWS container migrations, Terraform configuration pipelines, and pod orchestrations.",
    responsibilities: [
      "Declare and manage multi-region AWS environments using Terraform scripts.",
      "Orchestrate pod services and ingress controllers using Kubernetes clusters.",
      "Harden container registry keys and configure CI/CD deployment pipelines."
    ],
    requirements: [
      "6+ years of DevOps or Cloud infrastructure engineering experience.",
      "Strong proficiency writing Terraform modules and Docker container configurations.",
      "Expert knowledge of AWS VPCs, EKS, IAM, and secret management tools."
    ],
    benefits: [
      "401(k) matching (100% of first 4% contributed).",
      "Flexible working schedules and monthly health wellness stipends.",
      "Option to work 100% remotely."
    ]
  },
  {
    id: "job-3",
    title: "Lead AI & ML Integration Engineer",
    slug: "lead-ai-ml-engineer",
    department: "Engineering",
    experienceLevel: "Lead",
    location: "San Francisco, CA",
    mode: "On-site",
    salaryRange: "$180,000 - $220,000",
    description: "Build custom Retrieval-Augmented Generation (RAG) search indexes, fine-tune model weights, and write semantic vector systems.",
    responsibilities: [
      "Design and deploy production-grade RAG pipelines and search APIs.",
      "Fine-tune Large Language Models (LLMs) using LoRA / QLoRA techniques.",
      "Manage statistical PyTorch model runs and vector database indices (Pinecone/pgvector)."
    ],
    requirements: [
      "PhD or MS in computer science with ML specialization.",
      "Deep understanding of transformer architectures and tokenizers.",
      "Strong Python coding skills and libraries configurations (PyTorch, LangChain, Transformers)."
    ],
    benefits: [
      "Competitive equity stock options.",
      "In-house chef-catered lunches and gym memberships.",
      "Direct budgets to attend international AI research conferences."
    ]
  },
  {
    id: "job-4",
    title: "Senior Product Designer",
    slug: "senior-product-designer",
    department: "Design",
    experienceLevel: "Senior",
    location: "New York, NY",
    mode: "Hybrid",
    salaryRange: "$130,000 - $155,000",
    description: "Design premium, animation-rich dashboards and portal workspaces matching corporate branding identities.",
    responsibilities: [
      "Conduct user research calls and compile wireframes prototypes.",
      "Build design systems tokens libraries and Figma templates.",
      "Deliver detailed layouts specifications and hover-state timelines to developers."
    ],
    requirements: [
      "4+ years of product or web layout design experience.",
      "A stunning portfolio showcasing SaaS dashboards, typography grids, and micro-animations.",
      "Strong command of Figma design variables and prototyping tools."
    ],
    benefits: [
      "Full family medical plan coverages.",
      "Generous parental leaves options (16 weeks paid).",
      "Latest Mac Studio hardware setup."
    ]
  },
  {
    id: "job-5",
    title: "Product Manager (Education Tech)",
    slug: "product-manager-edtech",
    department: "Product",
    experienceLevel: "Senior",
    location: "Chicago, IL",
    mode: "Hybrid",
    salaryRange: "$120,000 - $145,000",
    description: "Steer features roadmaps, coordinate academy bootcamps requirements, and direct portal dashboard enhancements.",
    responsibilities: [
      "Collaborate with marketing and trainers to outline curriculum metrics.",
      "Compile requirements specifications, ticket priorities, and release cycles.",
      "Monitor student enrollment conversions and placement rates dashboards."
    ],
    requirements: [
      "3+ years managing SaaS, marketplace, or EdTech products.",
      "Strong quantitative analysis skills (SQL, Mixpanel, Excel).",
      "Empathetic user focus with experience leading agile scrum standups."
    ],
    benefits: [
      "Wellness stipend and gym membership reimbursement.",
      "Annual education budget ($3,000).",
      "Performance-based annual bonuses."
    ]
  },
  {
    id: "job-6",
    title: "Growth Marketing Specialist",
    slug: "growth-marketing-specialist",
    department: "Marketing",
    experienceLevel: "Mid",
    location: "Miami, FL",
    mode: "Remote",
    salaryRange: "$80,000 - $105,000",
    description: "Execute email qualifiers campaigns, scale social channels, and manage B2B sales lead funnels.",
    responsibilities: [
      "Run organic and paid advertising setups targeting corporate partners.",
      "Audit search engine optimization (SEO) configurations across marketing landing pages.",
      "Manage lead capture forms and email campaigns pipelines."
    ],
    requirements: [
      "2+ years of growth marketing experience in B2B SaaS.",
      "Proficiency with analytics tools (Google Analytics, HubSpot).",
      "Strong writing skills with a focus on tech branding."
    ],
    benefits: [
      "Flexible PTO policy.",
      "Co-working space membership stipend.",
      "Learning resource allowances."
    ]
  }
];
export default mockJobs;
