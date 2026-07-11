export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const mockCompanyStats: StatItem[] = [
  {
    id: "1",
    value: 98,
    suffix: "%",
    label: "Client Retention",
    description: "Enterprise IT project completion satisfaction rate."
  },
  {
    id: "2",
    value: 120,
    suffix: "+",
    label: "Software Delivered",
    description: "Bespoke systems, web platforms, and mobile apps built."
  },
  {
    id: "3",
    value: 95,
    suffix: "%",
    label: "Career Placement",
    description: "Academy graduates hired within 180 days of course completion."
  },
  {
    id: "4",
    value: 50,
    suffix: "M+",
    label: "Funding Secured",
    description: "Revenue generated for clients through scalable tech."
  }
];
export default mockCompanyStats;
