export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type CourseMode = 'Online' | 'Offline' | 'Hybrid';

export interface CourseModule {
  title: string;
  duration: string;
  lessons: string[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  categorySlug: string;
  categoryName: string;
  description: string;
  longDescription: string;
  price: number;
  level: CourseLevel;
  duration: string; // e.g. "12 Weeks"
  mode: CourseMode;
  trainerId: string;
  rating: number;
  enrolledCount: number;
  syllabus: CourseModule[];
  faqs: { question: string; answer: string }[];
}

export const mockCourses: Course[] = [
  {
    id: "c-1",
    title: "React 19 & Next.js Enterprise Bootcamp",
    slug: "react-19-bootcamp",
    categorySlug: "web-development",
    categoryName: "Web Development",
    description: "Master React 19, server actions, state hooks, and compile optimizations to build production-grade single-page applications.",
    longDescription: "This immersive bootcamp is designed to take you from foundational JavaScript to building high-performance, SEO-optimized React 19 and Next.js platforms. You will learn to use server actions, concurrent features, and the new compiler directly on commercial projects.",
    price: 1499,
    level: "Intermediate",
    duration: "12 Weeks",
    mode: "Hybrid",
    trainerId: "tr-1",
    rating: 4.9,
    enrolledCount: 1240,
    syllabus: [
      {
        title: "Module 1: React 19 Core & Compiler",
        duration: "2 Weeks",
        lessons: ["Understanding React Compiler optimizations", "Server Components vs Client Components", "The use() Hook and Asset Loading"]
      },
      {
        title: "Module 2: Server Actions & Hook Primitives",
        duration: "3 Weeks",
        lessons: ["Form Actions and useActionState", "Optimistic Updates with useOptimistic", "Refined Form Status utilities"]
      },
      {
        title: "Module 3: Routing & SSR in Next.js",
        duration: "4 Weeks",
        lessons: ["App Router layout patterns", "Static Site Generation vs Server Rendering", "Streaming HTML with Suspense"]
      },
      {
        title: "Module 4: Enterprise State & Build Optimizations",
        duration: "3 Weeks",
        lessons: ["Zustand and context-based state trees", "Rolldown and Vite build chunk configurations", "LCP and Core Web Vitals optimization"]
      }
    ],
    faqs: [
      { question: "Is this bootcamp suitable for complete beginners?", answer: "We recommend basic HTML/CSS and core JS syntax knowledge. We cover intermediate concepts rapidly." },
      { question: "Does this course offer placement support?", answer: "Yes, graduation unlocks automatic matching via our Recruiter Portal." }
    ]
  },
  {
    id: "c-2",
    title: "Advanced Tailwind CSS v4 Responsive Layouts",
    slug: "advanced-tailwind-v4",
    categorySlug: "web-development",
    categoryName: "Web Development",
    description: "Deep dive into Tailwind CSS v4 CSS-first configuration, container queries, and sub-pixel glassmorphisms.",
    longDescription: "Unlock the full styling capability of modern web platforms. This course targets CSS variables configurations, subgrid alignment, has selectors, and animations without writing raw CSS sheets.",
    price: 399,
    level: "Advanced",
    duration: "4 Weeks",
    mode: "Online",
    trainerId: "tr-1",
    rating: 4.8,
    enrolledCount: 850,
    syllabus: [
      {
        title: "Module 1: CSS-First Configuration",
        duration: "1 Week",
        lessons: ["Working with @theme configurations", "Registering custom keyframes", "Integrating custom variables font-faces"]
      },
      {
        title: "Module 2: Advanced Flex & Grid",
        duration: "2 Weeks",
        lessons: ["Subgrid structures and responsive alignments", "Container queries vs Viewport media queries", "The powerful :has() selector in forms"]
      }
    ],
    faqs: [
      { question: "Do we need Tailwind v3 experience?", answer: "It is helpful, but we explain v4 changes from absolute scratch." }
    ]
  },
  {
    id: "c-3",
    title: "TypeScript 5.x Strict Systems Design",
    slug: "typescript-systems-design",
    categorySlug: "web-development",
    categoryName: "Web Development",
    description: "Write robust, type-safe production code using discriminated unions, utility types, and strict configurations.",
    longDescription: "Learn to build complex data schemas, utility extensions, and type-narrowed operations. Avoid type assertion hacks and structure code cleanly.",
    price: 599,
    level: "Advanced",
    duration: "6 Weeks",
    mode: "Online",
    trainerId: "tr-1",
    rating: 4.9,
    enrolledCount: 940,
    syllabus: [
      {
        title: "Module 1: Type Narrowing & Unions",
        duration: "3 Weeks",
        lessons: ["Discriminated type unions in state trees", "Type guards and unknown narrowing", "Handling strict indexed access errors"]
      }
    ],
    faqs: []
  },
  {
    id: "c-4",
    title: "Cloud-Native Infrastructure with AWS & Terraform",
    slug: "aws-terraform-cloud",
    categorySlug: "cloud-devops",
    categoryName: "Cloud & DevOps",
    description: "Provision AWS clusters, manage load balances, and deploy microservices with Terraform infrastructure-as-code.",
    longDescription: "Learn to declare, audit, and spin up scalable servers automatically. Build VPCs, link S3 buckets, and configure IAM policies safely.",
    price: 1299,
    level: "Intermediate",
    duration: "10 Weeks",
    mode: "Hybrid",
    trainerId: "tr-2",
    rating: 4.7,
    enrolledCount: 620,
    syllabus: [
      {
        title: "Module 1: Infrastructure as Code Basics",
        duration: "3 Weeks",
        lessons: ["Declaring variables and state files in Terraform", "Configuring resource blocks", "AWS provider linkages"]
      }
    ],
    faqs: []
  },
  {
    id: "c-5",
    title: "Docker & Kubernetes Container Orchestration",
    slug: "docker-k8s-orchestration",
    categorySlug: "cloud-devops",
    categoryName: "Cloud & DevOps",
    description: "Containerize code systems, orchestrate multiregional pods, and build failover systems.",
    longDescription: "Dockerize full-stack services and coordinate multi-node deployments with Kubernetes. Config map ingress, secret bindings, and pod auto-scaling.",
    price: 899,
    level: "Advanced",
    duration: "8 Weeks",
    mode: "Offline",
    trainerId: "tr-2",
    rating: 4.9,
    enrolledCount: 510,
    syllabus: [],
    faqs: []
  },
  {
    id: "c-6",
    title: "DevOps CI/CD Pipeling Automation",
    slug: "devops-cicd-pipeline",
    categorySlug: "cloud-devops",
    categoryName: "Cloud & DevOps",
    description: "Write workflows, run lint checks automatically, and push live builds on commits.",
    longDescription: "Build automated pipeline runners using GitHub Actions and GitLab CI. Secure keys, compile code, run tests, and deploy to AWS.",
    price: 499,
    level: "Intermediate",
    duration: "5 Weeks",
    mode: "Online",
    trainerId: "tr-2",
    rating: 4.6,
    enrolledCount: 710,
    syllabus: [],
    faqs: []
  },
  {
    id: "c-7",
    title: "Deep Learning Foundations with PyTorch",
    slug: "deep-learning-pytorch",
    categorySlug: "artificial-intelligence",
    categoryName: "AI & Machine Learning",
    description: "Train neural networks, tune learning ratios, and build computer vision systems.",
    longDescription: "An introduction to artificial neural networks. Code tensors, loss algorithms, gradient backpropagation, and image classification arrays.",
    price: 1399,
    level: "Beginner",
    duration: "10 Weeks",
    mode: "Hybrid",
    trainerId: "tr-3",
    rating: 4.8,
    enrolledCount: 440,
    syllabus: [],
    faqs: []
  },
  {
    id: "c-8",
    title: "LLM Fine-Tuning & Prompt Engineering",
    slug: "llm-fine-tuning",
    categorySlug: "artificial-intelligence",
    categoryName: "AI & Machine Learning",
    description: "Fine-tune pretrained weights, inject custom documents, and build RAG pipelines.",
    longDescription: "Take large language models and tune them with specific target datasets. Leverage LoRA, QLoRA, and LangChain embeddings with vector databases.",
    price: 1599,
    level: "Advanced",
    duration: "12 Weeks",
    mode: "Hybrid",
    trainerId: "tr-3",
    rating: 4.9,
    enrolledCount: 680,
    syllabus: [],
    faqs: []
  },
  {
    id: "c-9",
    title: "Natural Language Processing (NLP) in Production",
    slug: "nlp-production",
    categorySlug: "artificial-intelligence",
    categoryName: "AI & Machine Learning",
    description: "Build transformers, tokenizers, and sentiment classifiers using Hugging Face.",
    longDescription: "Deploy robust NLP text processors to client production nodes. Translate languages, group tags, and parse logs.",
    price: 699,
    level: "Intermediate",
    duration: "8 Weeks",
    mode: "Online",
    trainerId: "tr-3",
    rating: 4.5,
    enrolledCount: 380,
    syllabus: [],
    faqs: []
  },
  {
    id: "c-10",
    title: "Cybersecurity Threat Hunting & Analysis",
    slug: "threat-hunting-cyber",
    categorySlug: "cybersecurity",
    categoryName: "Cybersecurity",
    description: "Identify server vulnerabilities, monitor network ports, and mitigate database breaches.",
    longDescription: "Learn the protocols of penetration testing and forensic operations. Monitor Wireshark logs, audit SQL injections, and trace exploit footprints.",
    price: 1199,
    level: "Intermediate",
    duration: "10 Weeks",
    mode: "Hybrid",
    trainerId: "tr-4",
    rating: 4.8,
    enrolledCount: 480,
    syllabus: [],
    faqs: []
  },
  {
    id: "c-11",
    title: "OWASP Top 10 Web Application Hardening",
    slug: "owasp-web-hardening",
    categorySlug: "cybersecurity",
    categoryName: "Cybersecurity",
    description: "Secure routing parameters, prevent cross-site scripting, and secure API keys.",
    longDescription: "Target the ten most critical vulnerabilities declared by OWASP. Harden headers, implement CSP, and secure authentication channels.",
    price: 499,
    level: "Advanced",
    duration: "5 Weeks",
    mode: "Online",
    trainerId: "tr-4",
    rating: 4.9,
    enrolledCount: 780,
    syllabus: [],
    faqs: []
  },
  {
    id: "c-12",
    title: "Penetration Testing & Red Teaming Labs",
    slug: "penetration-testing-labs",
    categorySlug: "cybersecurity",
    categoryName: "Cybersecurity",
    description: "Execute structured exploits, bypass firewalls, and compile reports safely.",
    longDescription: "Practice ethical hacking inside sandbox container networks. Exploit active servers, crack authentication locks, and draft security fix audits.",
    price: 1499,
    level: "Advanced",
    duration: "12 Weeks",
    mode: "Offline",
    trainerId: "tr-4",
    rating: 5.0,
    enrolledCount: 310,
    syllabus: [],
    faqs: []
  }
];
export default mockCourses;
