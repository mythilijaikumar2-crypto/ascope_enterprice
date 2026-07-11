export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  clientName: string;
  category: 'Web' | 'Cloud' | 'AI' | 'Enterprise';
  summary: string;
  challenge: string;
  solution: string;
  metrics: { value: string; label: string }[];
}

export const mockCaseStudies: CaseStudy[] = [
  {
    id: "cs-1",
    title: "EliteApexkart E-Commerce Architecture Modernization",
    slug: "eliteapexkart",
    clientName: "EliteApexkart",
    category: "Web",
    summary: "Rebuilt a multi-vendor digital commerce framework using React 19, server rendering, and distributed cache grids.",
    challenge: "Scaling during flash sales caused cart dropouts and high server latencies under heavy transaction loads.",
    solution: "Implemented virtualized cart structures, lazy-loaded components, and cache-optimization techniques to secure smooth checkouts.",
    metrics: [
      { value: "+45%", label: "Conversion Increase" },
      { value: "< 200ms", label: "Cart Latency" },
      { value: "0", label: "Cart Dropouts" }
    ]
  },
  {
    id: "cs-2",
    title: "Inbind Technologies Secure Multi-Cloud Migration",
    slug: "inbind-technologies",
    clientName: "Inbind Technologies",
    category: "Cloud",
    summary: "Orchestrated a highly secure automated cloud infrastructure with zero downtime migration.",
    challenge: "Legacy databases and security gaps compromised data privacy and pipeline deployment speeds.",
    solution: "Architected modern Kubernetes environments under Terraform with continuous compliance scanning.",
    metrics: [
      { value: "99.999%", label: "Cloud Availability" },
      { value: "-35%", label: "AWS Cost Reduction" },
      { value: "10x", label: "Deploy Frequency" }
    ]
  },
  {
    id: "cs-3",
    title: "Heaven11 Holidays Travel Booking Portal Integration",
    slug: "heaven11-holidays",
    clientName: "Heaven11 Holidays",
    category: "Web",
    summary: "Constructed a high-fidelity real-time travel itinerary booking engine with dynamic pricing integration.",
    challenge: "Slow API aggregations and search filtering caused significant drop-offs on holiday packages.",
    solution: "Crafted optimized database indexing, edge caching, and a responsive search layout with micro-animations.",
    metrics: [
      { value: "+55%", label: "Bookings Completed" },
      { value: "0.8s", label: "Query Speed" },
      { value: "98%", label: "Search Accuracy" }
    ]
  },
  {
    id: "cs-4",
    title: "Wanderwish Holidays Personalized AI Itinerary Planner",
    slug: "wanderwish-holidays",
    clientName: "Wanderwish Holidays",
    category: "AI",
    summary: "Integrated generative semantic search engines suggesting optimal travel itineraries.",
    challenge: "Traditional manual travel planning created severe service backlogs and long customer wait times.",
    solution: "Built a custom semantic recommendations engine leveraging LLM models trained on customer reviews.",
    metrics: [
      { value: "+180%", label: "Planner Capacity" },
      { value: "92%", label: "Plan Approval Rate" },
      { value: "< 3s", label: "Generation Time" }
    ]
  },
  {
    id: "cs-5",
    title: "Jilla Clothing & Textile Distributed ERP Suite",
    slug: "jilla-clothing-textile",
    clientName: "Jilla Clothing and Textile",
    category: "Enterprise",
    summary: "Designed a centralized enterprise resource planning suite monitoring textile production and inventory.",
    challenge: "Fragmented supply chains led to material waste, shipping delays, and inaccurate stock counts.",
    solution: "Deployed real-time supply tracking dashboards, automated logistics management, and stock count sensors.",
    metrics: [
      { value: "-28%", label: "Materials Waste" },
      { value: "+42%", label: "Order Fulfillment" },
      { value: "100%", label: "Inventory Sync" }
    ]
  }
];
export default mockCaseStudies;

