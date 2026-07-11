export interface TechTool {
  name: string;
  category: 'Frontend' | 'Backend' | 'Infrastructure' | 'Data Science';
  description: string;
}

export const mockTechStack: TechTool[] = [
  { name: "React 19 & Next.js", category: "Frontend", description: "UI component layouts, server actions, and SSR compilation." },
  { name: "Tailwind CSS v4", category: "Frontend", description: "Design variables configuration and glassmorphic styles." },
  { name: "TypeScript 5.x", category: "Frontend", description: "Strict static schemas and type safety." },
  { name: "Node.js & Express", category: "Backend", description: "High-speed JSON REST APIs and authentication routes." },
  { name: "GraphQL & Apollo", category: "Backend", description: "Flexible data query interfaces." },
  { name: "PostgreSQL & Prisma", category: "Backend", description: "Relational database models and audit tables." },
  { name: "Terraform & AWS", category: "Infrastructure", description: "Infrastructure-as-code scripting and multi-region nodes." },
  { name: "Docker & Kubernetes", category: "Infrastructure", description: "Containerized images and pod orchestration." },
  { name: "GitHub Actions", category: "Infrastructure", description: "Automated lint check and deploy pipelines." },
  { name: "PyTorch & TensorFlow", category: "Data Science", description: "Neural network structures and custom AI weights training." },
  { name: "Vector Databases", category: "Data Science", description: "Semantic search vector indices (pgvector/Pinecone)." },
  { name: "Python & Jupyter", category: "Data Science", description: "Statistical scripts and data model evaluations." }
];
export default mockTechStack;
