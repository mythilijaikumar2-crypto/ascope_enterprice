export interface SuccessStory {
  id: string;
  studentName: string;
  courseTitle: string;
  placedCompany: string;
  placedRole: string;
  salaryIncrease: string; // e.g. "₹6.5 LPA"
  quote: string;
  avatar: string;
  year: number;
}

export const mockSuccessStories: SuccessStory[] = [
  {
    id: "story-1",
    studentName: "Arun Prakash",
    courseTitle: "Java Full Stack Development",
    placedCompany: "TCS",
    placedRole: "Full Stack Architect",
    salaryIncrease: "₹6.5 LPA",
    quote: "Ascope Tech's Java Full Stack training changed my trajectory completely. Building microservices and dynamic React web pages in class gave me the experience to clear interviews at TCS.",
    avatar: "AP",
    year: 2025
  },
  {
    id: "story-2",
    studentName: "Priya Nair",
    courseTitle: "Python and Data Science",
    placedCompany: "Cognizant",
    placedRole: "Data Analyst",
    salaryIncrease: "₹8.2 LPA",
    quote: "Working with real databases and structuring Pandas tables was highly practical. I transitioned from general sales to a data analyst role at Cognizant within months.",
    avatar: "PN",
    year: 2025
  },
  {
    id: "story-3",
    studentName: "Karthik Sundar",
    courseTitle: "Java Full Stack Development",
    placedCompany: "Wipro",
    placedRole: "Java Developer",
    salaryIncrease: "₹4.8 LPA",
    quote: "The Java OOPs structures and Spring REST APIs were taught from the ground up. I felt fully prepared for technical evaluations and got selected at Wipro.",
    avatar: "KS",
    year: 2025
  },
  {
    id: "story-4",
    studentName: "Dinesh Raj",
    courseTitle: "UI/UX Design",
    placedCompany: "Freshworks",
    placedRole: "UI/UX Designer",
    salaryIncrease: "₹7.2 LPA",
    quote: "Designing high-fidelity Figma layouts, handling Auto-Layout component variants, and studying user-behavior laws is what I do daily now at Freshworks. Outstanding course!",
    avatar: "DR",
    year: 2026
  },
  {
    id: "story-5",
    studentName: "Saranya Kumar",
    courseTitle: "Data Science and Machine Learning",
    placedCompany: "Zoho",
    placedRole: "ML Engineer",
    salaryIncrease: "₹8.2 LPA",
    quote: "Configuring predictive regression algorithms, Random Forest ensembles, and deployment loops was highly detailed. Ascope Tech is the best partner for advanced engineering bootcamps.",
    avatar: "SK",
    year: 2026
  }
];

export default mockSuccessStories;
