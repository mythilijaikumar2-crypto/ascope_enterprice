export interface SuccessStory {
  id: string;
  studentName: string;
  courseTitle: string;
  placedCompany: string;
  placedRole: string;
  salaryIncrease: string; // e.g. "120% Increase"
  quote: string;
  avatar: string;
  year: number;
}

export const mockSuccessStories: SuccessStory[] = [
  {
    id: "story-1",
    studentName: "Jagadeeshwaran Pillai",
    courseTitle: "React 19 & Next.js Enterprise Bootcamp",
    placedCompany: "Helius Technologies",
    placedRole: "Junior Frontend Developer",
    salaryIncrease: "+85% Salary",
    quote: "Ascope Academy changed my life. I went from a retail job to writing enterprise React systems. The placement matching was incredibly fast — within 3 weeks of graduating, I signed my offer.",
    avatar: "JP",
    year: 2025
  },
  {
    id: "story-2",
    studentName: "Ananya Krishnaswamy",
    courseTitle: "Cloud-Native Infrastructure with AWS & Terraform",
    placedCompany: "Apex Security Inc.",
    placedRole: "DevOps Engineer",
    salaryIncrease: "+110% Salary",
    quote: "The Terraform lab requirements were strict, but they matched exactly what my interviewer asked. Now, I deploy VPC networks and pods configurations daily. The curriculum is top tier.",
    avatar: "AK",
    year: 2025
  },
  {
    id: "story-3",
    studentName: "Yuvaraj Thangavel",
    courseTitle: "LLM Fine-Tuning & Prompt Engineering",
    placedCompany: "Centaurus AI Systems",
    placedRole: "AI Specialist",
    salaryIncrease: "+150% Salary",
    quote: "Fine-tuning weights and structuring LangChain embeddings are rare skills. Ascope Academy taught me how to deploy model runs on production nodes, which directly led to my new lead role.",
    avatar: "YT",
    year: 2026
  }
];
export default mockSuccessStories;
