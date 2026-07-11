export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Arun Kumar",
    role: "Full Stack Developer",
    company: "Freshworks (Chennai)",
    avatar: "AK",
    quote: "The curriculum at Ascope Tech is exactly what I needed to land my dream job. Building real Spring Boot backends and React frontends made all the difference in my interviews.",
    rating: 5
  },
  {
    id: "2",
    name: "Mythili Jaikumar",
    role: "Data Scientist",
    company: "Tiger Analytics (Chennai)",
    avatar: "MJ",
    quote: "The hands-on projects were the highlight. I learned more in 6 months here than in 4 years of college. Working on actual regression models and databases was phenomenal.",
    rating: 5
  },
  {
    id: "3",
    name: "Rajesh Balaji",
    role: "UI/UX Designer",
    company: "Zoho Corporation (Chennai)",
    avatar: "RB",
    quote: "Premium quality education with a focus on real-world application. Figma auto-layouts, prototyping flows, and design systems are covered in absolute detail.",
    rating: 5
  },
  {
    id: "4",
    name: "Anitha Selvam",
    role: "Software Engineer",
    company: "PayPal India (Chennai)",
    avatar: "AS",
    quote: "The placement team worked tirelessly with me. They set up mock interviews, reviewed my profile, and helped me clear tough coding rounds at PayPal.",
    rating: 5
  },
  {
    id: "5",
    name: "Keerthi Rajan",
    role: "DevOps Engineer",
    company: "Zoho Corporation (Tenkasi)",
    avatar: "KR",
    quote: "The Docker, Kubernetes, and CI/CD pipelines taught here are extremely practical. Having actual server deployments and Terraform labs is a huge advantage.",
    rating: 5
  },
  {
    id: "6",
    name: "Divya Prakash",
    role: "Frontend Lead",
    company: "Chargebee (Chennai)",
    avatar: "DP",
    quote: "Their emphasis on clean React architectures and modular styling systems blew me away. I transitioned from a legacy developer to writing high-performance clients quickly.",
    rating: 5
  },
  {
    id: "7",
    name: "Hariharan Sridhar",
    role: "Cybersecurity Specialist",
    company: "HCLTech (Chennai)",
    avatar: "HS",
    quote: "The practical labs for ethical hacking and network security are phenomenal. Learning penetration testing under live threat models prepared me for industry demands.",
    rating: 5
  },
  {
    id: "8",
    name: "Aswini Ramachandran",
    role: "Cloud Solutions Architect",
    company: "Cognizant (Chennai)",
    avatar: "AR",
    quote: "Transitioning into Cloud Computing was easy thanks to their structured AWS training. The VPC configurations and IAM architectures lessons are very high fidelity.",
    rating: 5
  },
  {
    id: "9",
    name: "Karthikeyan M",
    role: "Python Developer",
    company: "TCS (Siruseri)",
    avatar: "KM",
    quote: "From basic syntax to advanced algorithms, the Python full course is comprehensive. It gave me the skills to parse high-volume data arrays easily.",
    rating: 5
  },
  {
    id: "10",
    name: "Deepalakshmi S",
    role: "Backend Developer",
    company: "Infosys (Mahindra World City)",
    avatar: "DS",
    quote: "The Spring Boot and database optimization modules were top-tier. I learned how to manage database transaction scopes and cache queries for faster read calls.",
    rating: 5
  },
  {
    id: "11",
    name: "Vijay Raghavan",
    role: "Senior Engineer",
    company: "Caterpillar India (Chennai)",
    avatar: "VR",
    quote: "I recommended Ascope Tech to my younger brother, and he secured an internship within months! The mentors are highly dedicated and encourage practical programming.",
    rating: 5
  },
  {
    id: "12",
    name: "Sandhya Ramakrishnan",
    role: "Mobile App Developer",
    company: "Trimble (Chennai)",
    avatar: "SR",
    quote: "The app development track is exceptional. They teach modern design principles, state integrations, and deploying clean builds to app stores.",
    rating: 5
  }
];

export default mockTestimonials;
