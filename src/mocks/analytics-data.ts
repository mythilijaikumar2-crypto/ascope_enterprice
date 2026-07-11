export interface FunnelStage {
  stage: string;
  count: number;
  percentage: number;
}

export interface EnrollmentPoint {
  month: string;
  enrolled: number;
  placed: number;
}

export interface EngagementPoint {
  category: string;
  activeContracts: number;
  deliveredSprints: number;
}

export interface AnalyticsKPI {
  id: string;
  label: string;
  value: number | string;
  change: number; // positive or negative percentage vs previous
  isTrendPositive: boolean;
  period: string;
}

export const mockHiringFunnel: FunnelStage[] = [
  { stage: "Applied", count: 87, percentage: 100 },
  { stage: "Screening", count: 52, percentage: 60 },
  { stage: "Interviewing", count: 24, percentage: 28 },
  { stage: "Offered", count: 8, percentage: 9 }
];

export const mockEnrollmentTrends: EnrollmentPoint[] = [
  { month: "Jan", enrolled: 45, placed: 32 },
  { month: "Feb", enrolled: 52, placed: 38 },
  { month: "Mar", enrolled: 68, placed: 44 },
  { month: "Apr", enrolled: 60, placed: 50 },
  { month: "May", enrolled: 75, placed: 58 },
  { month: "Jun", enrolled: 92, placed: 70 }
];

export const mockServiceEngagements: EngagementPoint[] = [
  { category: "Frontend Dev", activeContracts: 8, deliveredSprints: 48 },
  { category: "Cloud & DevOps", activeContracts: 6, deliveredSprints: 32 },
  { category: "AI & Vector LLM", activeContracts: 4, deliveredSprints: 24 },
  { category: "Security Audit", activeContracts: 3, deliveredSprints: 12 }
];

export const mockAnalyticsKPIs: Record<string, AnalyticsKPI[]> = {
  "last-30": [
    { id: "kpi-1", label: "Monthly Applied Candidates", value: 87, change: 12, isTrendPositive: true, period: "vs previous 30 days" },
    { id: "kpi-2", label: "Academy New Enrollments", value: 92, change: 8, isTrendPositive: true, period: "vs previous 30 days" },
    { id: "kpi-3", label: "Active B2B Enterprise Client Contracts", value: 21, change: 5, isTrendPositive: true, period: "vs previous 30 days" },
    { id: "kpi-4", label: "HR Panel Interviews Completed", value: 48, change: -4, isTrendPositive: false, period: "vs previous 30 days" }
  ],
  "last-7": [
    { id: "kpi-1", label: "Weekly Applied Candidates", value: 18, change: 4, isTrendPositive: true, period: "vs previous 7 days" },
    { id: "kpi-2", label: "Academy New Enrollments", value: 24, change: -2, isTrendPositive: false, period: "vs previous 7 days" },
    { id: "kpi-3", label: "Active B2B Enterprise Client Contracts", value: 21, change: 0, isTrendPositive: true, period: "vs previous 7 days" },
    { id: "kpi-4", label: "HR Panel Interviews Completed", value: 10, change: 15, isTrendPositive: true, period: "vs previous 7 days" }
  ]
};
