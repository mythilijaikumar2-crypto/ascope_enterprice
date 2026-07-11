export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string; // lucide icon identifier
  features: string[];
}

export const mockServices: ServiceItem[] = [
  {
    id: "srv-1",
    title: "Bespoke Enterprise Software",
    shortDesc: "Architecting modular, type-safe fullstack portals, dashboards, and integrations built for business scale.",
    longDesc: "We design, code, and test complete custom web systems. From initial Figma UI wireframes to React 19 single-page apps, our consulting engineers construct secure, maintainable platforms matching strict industry rules.",
    icon: "Cpu",
    features: [
      "Modular fullstack web applications",
      "Robust state management systems",
      "API integrations & custom data parsers",
      "Strict unit and integration testing pipelines"
    ]
  },
  {
    id: "srv-2",
    title: "Cloud-Native Infrastructure & DevOps",
    shortDesc: "Automating server deployments, scaling pods, VPC networks, and CI/CD pipelines for 99.99% uptime.",
    longDesc: "Migrate traditional environments to containerized AWS, GCP, or Azure clusters. We write clean Terraform scripts, deploy auto-scaling Kubernetes nodes, and harden security gates.",
    icon: "Cloud",
    features: [
      "Infrastructure as Code (IaC) with Terraform",
      "Docker & Kubernetes pod orchestration",
      "Automated CI/CD workflows setup",
      "Zero-downtime microservices configurations"
    ]
  },
  {
    id: "srv-3",
    title: "Enterprise AI & ML System Integration",
    shortDesc: "Deploying custom RAG search models, LLM fine-tuning runs, and predictive analysis systems directly to product nodes.",
    longDesc: "Accelerate decision-making and search relevancies. We train neural networks, set up Vector databases (pgvector/Pinecone), and write custom APIs to fine-tune AI agents.",
    icon: "BrainCircuit",
    features: [
      "Custom Retrieval-Augmented Generation (RAG)",
      "LLM weights fine-tuning & prompt alignments",
      "PyTorch neural networks deployments",
      "High-speed semantic search endpoints"
    ]
  }
];
export default mockServices;
