export interface Certification {
  id: string;
  name: string;
  code: string;
  issuer: string;
  description: string;
  badgeUrl: string;
  requirements: string[];
}

export const mockCertifications: Certification[] = [
  {
    id: "cert-1",
    name: "Certified Enterprise Frontend Architect",
    code: "CEFA",
    issuer: "Ascope Academy Board",
    description: "Validates competencies in advanced React 19 state engines, build bundles code splitting, and Lighthouse performance auditing.",
    badgeUrl: "CEFA",
    requirements: [
      "Completion of React 19 & Next.js Enterprise Bootcamp",
      "Passing structural build size limit audit criteria",
      "Drafting a final React project with Lighthouse score >= 90"
    ]
  },
  {
    id: "cert-2",
    name: "Certified Cloud Operations Specialist",
    code: "CCOS",
    issuer: "Ascope Academy Board",
    description: "Validates competencies in Terraform scripts deployments, Kubernetes pods setup, ingress configurations, and CI/CD automation.",
    badgeUrl: "CCOS",
    requirements: [
      "Completion of Cloud-Native Infrastructure with AWS & Terraform",
      "Completion of K8s Orchestration course",
      "Simulating a cluster failover audit in sandbox lab"
    ]
  },
  {
    id: "cert-3",
    name: "Certified AI Integration Engineer",
    code: "CAIE",
    issuer: "Ascope Academy Board",
    description: "Validates competencies in PyTorch model architectures, LoRA LLM tuning, LangChain embeddings, and RAG pipelines setups.",
    badgeUrl: "CAIE",
    requirements: [
      "Completion of PyTorch deep learning core",
      "Completion of LLM Fine-Tuning bootcamp",
      "Building a working semantic search engine prototype"
    ]
  }
];
export default mockCertifications;
