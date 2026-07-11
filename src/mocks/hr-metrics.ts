export interface ApplicationTrendPoint {
  date: string;
  count: number;
}

export interface DepartmentRatio {
  name: string;
  value: number;
}

export const mockApplicationTrends: ApplicationTrendPoint[] = [
  { date: "June 10", count: 8 },
  { date: "June 15", count: 12 },
  { date: "June 20", count: 18 },
  { date: "June 25", count: 15 },
  { date: "June 30", count: 24 },
  { date: "July 05", count: 32 }
];

export const mockDepartmentRatios: DepartmentRatio[] = [
  { name: "Engineering", value: 45 },
  { name: "Design", value: 20 },
  { name: "Product", value: 15 },
  { name: "Marketing", value: 20 }
];
