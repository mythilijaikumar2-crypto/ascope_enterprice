export interface AIMatchScore {
  candidateId: string;
  candidateName: string;
  overallScore: number;
  skillsScore: number;
  experienceScore: number;
  educationScore: number;
}

export const mockAIMatchScores: Record<string, AIMatchScore[]> = {
  "job-1": [ // Senior Frontend
    { candidateId: "cand-1", candidateName: "Sarah Connor", overallScore: 92, skillsScore: 95, experienceScore: 90, educationScore: 90 },
    { candidateId: "cand-2", candidateName: "John Watson", overallScore: 75, skillsScore: 70, experienceScore: 80, educationScore: 75 }
  ],
  "job-4": [ // Senior Product Designer
    { candidateId: "cand-4", candidateName: "Irene Adler", overallScore: 87, skillsScore: 85, experienceScore: 90, educationScore: 85 }
  ]
};
export default mockAIMatchScores;
