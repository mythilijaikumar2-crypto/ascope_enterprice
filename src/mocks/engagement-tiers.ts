export interface EngagementTier {
  feature: string;
  tier1: string; // e.g. "Ad-Hoc Consulting"
  tier2: string; // e.g. "Dedicated Agile Team"
  tier3: string; // e.g. "Full Enterprise Partnership"
}

export const mockEngagementTiers: EngagementTier[] = [
  {
    feature: "Resource Capacity",
    tier1: "1-2 Part-Time Engineers",
    tier2: "3-6 Dedicated Full-Time Team",
    tier3: "Fully managed division scaling"
  },
  {
    feature: "SLA Response Times",
    tier1: "24-48 Hours",
    tier2: "Under 4 Hours",
    tier3: "Under 30 Minutes with PagerDuty"
  },
  {
    feature: "Project Management",
    tier1: "Client Managed",
    tier2: "Dedicated Scrum Master & Jira board",
    tier3: "VP of Engineering Oversight + Slack channels"
  },
  {
    feature: "Code Guarantee",
    tier1: "Standard warranty",
    tier2: "Covered by testing suites (>=80% coverage)",
    tier3: "Continuous audits & systems guarantees"
  }
];
export default mockEngagementTiers;
