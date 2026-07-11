export interface PartnerCompany {
  name: string;
  logo: string;
  industry: string;
}

export interface PlacementMetric {
  year: number;
  placementRate: number; // percentage
  averageSalary: number; // in USD
}

export const mockPartnerCompanies: PartnerCompany[] = [
  { name: "Helius Technologies", logo: "HT", industry: "Fintech & Banking" },
  { name: "Apex Security Inc.", logo: "AS", industry: "SaaS Security" },
  { name: "Centaurus AI Systems", logo: "CA", industry: "Machine Learning" },
  { name: "Vortex Digital Services", logo: "VD", industry: "IT Consulting" }
];

export const mockPlacementMetrics: PlacementMetric[] = [
  { year: 2023, placementRate: 88, averageSalary: 72000 },
  { year: 2024, placementRate: 92, averageSalary: 81000 },
  { year: 2025, placementRate: 95, averageSalary: 93000 }
];
