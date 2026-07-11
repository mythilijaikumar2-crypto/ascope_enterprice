export interface Department {
  id: string;
  name: 'Engineering' | 'Design' | 'Product' | 'Marketing';
  description: string;
}

export const mockDepartments: Department[] = [
  { id: "dept-1", name: "Engineering", description: "Frontend, backend, DevOps, infrastructure, and AI engineering divisions." },
  { id: "dept-2", name: "Design", description: "UI/UX, visual styling, brand illustration, and design systems token groups." },
  { id: "dept-3", name: "Product", description: "Product lifecycle managers, coordinators, and research divisions." },
  { id: "dept-4", name: "Marketing", description: "B2B growth, SEO optimization, and corporate communications." }
];
export default mockDepartments;
