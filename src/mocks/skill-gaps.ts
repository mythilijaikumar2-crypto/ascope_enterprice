export interface SkillGapPoint {
  skill: string;
  match: boolean;
}

export const mockSkillGaps: Record<string, SkillGapPoint[]> = {
  "cand-1": [ // Sarah Connor
    { skill: "React 19", match: true },
    { skill: "TypeScript", match: true },
    { skill: "Tailwind CSS", match: true },
    { skill: "Node.js", match: true },
    { skill: "Docker/CI-CD", match: false },
    { skill: "AWS Clusters", match: false }
  ],
  "cand-2": [ // John Watson
    { skill: "React 19", match: true },
    { skill: "JavaScript", match: true },
    { skill: "HTML/CSS", match: true },
    { skill: "TypeScript", match: false },
    { skill: "Tailwind CSS v4", match: false },
    { skill: "State Management", match: false }
  ]
};
export default mockSkillGaps;
