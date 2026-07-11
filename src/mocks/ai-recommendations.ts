export interface AIRecommendation {
  candidateId: string;
  summary: string;
  suggestedAction: string;
  confidence: number;
}

export const mockAIRecommendations: Record<string, AIRecommendation[]> = {
  "cand-1": [ // Sarah Connor
    {
      candidateId: "cand-1",
      summary: "Highly qualified candidate demonstrating strong proficiency in React 19 and custom Tailwind CSS integrations. Substantial commercial experience in secure systems dashboards matches over 90% of job requirements.",
      suggestedAction: "Fast-track to Panel Interview stage.",
      confidence: 94
    },
    {
      candidateId: "cand-1",
      summary: "Candidate displays strong React architecture knowledge. Has experience with state managers and CI/CD tools. Fits cultural team metrics exceptionally well.",
      suggestedAction: "Advance to Tech evaluation.",
      confidence: 89
    }
  ],
  "cand-2": [ // John Watson
    {
      candidateId: "cand-2",
      summary: "Competent frontend developer with solid JavaScript skills. However, lacks deep commercial experience with React 19 frameworks or cloud deployments.",
      suggestedAction: "Proceed with initial technical screening.",
      confidence: 76
    }
  ]
};
export default mockAIRecommendations;
