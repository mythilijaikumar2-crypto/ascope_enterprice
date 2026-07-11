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
    name: "Karthik Chidambaram",
    role: "Chief Technology Officer",
    company: "Apex Global Solutions",
    avatar: "KC",
    quote: "Ascope Tech transformed our legacy database systems into high-performance cloud architectures. Their software engineers are exceptional, delivering solutions that reduced our server overhead by 40% within the first quarter.",
    rating: 5
  },
  {
    id: "2",
    name: "Priya Ramasamy",
    role: "Director of HR Operations",
    company: "Vortex Fintech",
    avatar: "PR",
    quote: "The recruitment matching service of Ascope Tech has been our secret hiring weapon. We found three lead engineers through their platform who matched our technical and cultural criteria perfectly. Highly recommended!",
    rating: 5
  },
  {
    id: "3",
    name: "Srinivasan Venkatraman",
    role: "Senior Engineering Manager",
    company: "Nova AI Systems",
    avatar: "SV",
    quote: "We hired five bootcamp graduates from the Ascope Academy. They arrived productive on day one, fully capable in React 19, TS, and DevOps. The curriculum matches actual enterprise development environments.",
    rating: 5
  },
  {
    id: "4",
    name: "Lakshmi Narayanan",
    role: "Product Owner",
    company: "Quantum Labs",
    avatar: "LN",
    quote: "Bespoke software development, continuous employee upskilling, and direct pipeline matching on one single platform. Ascope Tech is the perfect partner for rapidly scaling technical operations.",
    rating: 4
  }
];
export default mockTestimonials;
