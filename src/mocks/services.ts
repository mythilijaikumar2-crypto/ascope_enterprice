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
    title: "Custom Software Development",
    shortDesc: "We engineer performant, custom backend systems and applications tailored exactly to your business's proprietary workflows.",
    longDesc: "Transform raw operations logs into automated pipelines. Our senior software engineers design secure, modular systems built with robust scalability protocols to optimize resource usage and improve processing speed.",
    icon: "Cpu",
    features: [
      "Enterprise System Integration",
      "Legacy Application Modernization",
      "API Design & Development",
      "Secure Payment Engines"
    ]
  },
  {
    id: "srv-2",
    title: "Web Application Development",
    shortDesc: "Responsive web architectures built with React, Vite, and high-performance states for flawless user experiences.",
    longDesc: "Leverage modern, interactive, and high-fidelity interfaces that look premium and function flawlessly. We handle complex routing layouts, advanced global states, and high SEO search crawler optimizations.",
    icon: "Globe",
    features: [
      "Single Page Applications (SPAs)",
      "Server-side Rendered (SSR) Systems",
      "B2B SaaS Portals",
      "Admin Management Interfaces"
    ]
  },
  {
    id: "srv-3",
    title: "Mobile App Development",
    shortDesc: "High-quality, fluid mobile builds that align native hardware access with elegant micro-interactions.",
    longDesc: "Reach customers directly on Android and iOS devices. Our developers write native-compiling codebase configurations that deliver smooth 60fps scrolling, instant push updates, and zero-trust security layouts.",
    icon: "Smartphone",
    features: [
      "Cross-Platform React Native",
      "iOS Swift Engineering",
      "Android Kotlin Solutions",
      "App Store Compliance & Deploy"
    ]
  },
  {
    id: "srv-4",
    title: "Cloud & DevOps Engineering",
    shortDesc: "Robust automated architectures designed for zero-downtime releases, fast rollbacks, and high cost-efficiency.",
    longDesc: "Achieve near-100% service uptime. We automate cloud environment provisioning using Terraform, set up auto-scaling container configurations, and secure microservice endpoints.",
    icon: "Cloud",
    features: [
      "AWS, GCP, & Azure Infrastructure",
      "Kubernetes & Docker Orchestration",
      "Terraform Infrastructure as Code",
      "Continuous Integration (CI/CD) Pipelines"
    ]
  },
  {
    id: "srv-5",
    title: "UI/UX Design Systems",
    shortDesc: "Modern visual layouts driven by clear usability heuristics, smooth motion curves, and coherent typography styles.",
    longDesc: "We design beautiful, scalable interfaces that wow users. We map complete user paths, construct detailed wireframes in Figma, and audit tap targets for strict accessibility conformance.",
    icon: "Palette",
    features: [
      "User Journey Mapping",
      "Wireframes & Mockups",
      "Tailwind Component Design Systems",
      "A11y (WCAG) Accessibility Auditing"
    ]
  },
  {
    id: "srv-6",
    title: "AI & Data Engineering",
    shortDesc: "Deploy smart, data-driven analytical insights and LLM layers directly into your production products.",
    longDesc: "Harness modern automated intelligence systems. We set up high-speed semantic vector database clusters, build data scraping pipelines, and fine-tune models to run on hosted cloud nodes.",
    icon: "BrainCircuit",
    features: [
      "Large Language Model Integration",
      "Vector Database Operations",
      "Data Scraping & Structuring Pipelines",
      "Custom Machine Learning Models"
    ]
  }
];

export default mockServices;
