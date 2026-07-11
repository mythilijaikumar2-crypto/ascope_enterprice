// Mock data for Design System Showcase

export interface SampleRow {
  id: string;
  name: string;
  role: string;
  status: 'active' | 'pending' | 'inactive';
  experience: number;
}

export const sampleTableData: SampleRow[] = [
  { id: "1", name: "Sarah Connor", role: "Senior Frontend Engineer", status: "active", experience: 8 },
  { id: "2", name: "John Doe", role: "Cloud Solutions Architect", status: "active", experience: 12 },
  { id: "3", name: "Bruce Wayne", role: "Cybersecurity Director", status: "pending", experience: 15 },
  { id: "4", name: "Clark Kent", role: "Junior Software Developer", status: "inactive", experience: 2 },
  { id: "5", name: "Diana Prince", role: "Lead Devops Specialist", status: "active", experience: 10 },
  { id: "6", name: "Barry Allen", role: "Fullstack Developer", status: "active", experience: 4 },
  { id: "7", name: "Arthur Curry", role: "Database Administrator", status: "pending", experience: 6 },
  { id: "8", name: "Hal Jordan", role: "QA Engineer", status: "inactive", experience: 5 }
];

export const sampleLineData = [
  { name: 'Jan', enrollment: 400, recruitment: 240 },
  { name: 'Feb', enrollment: 300, recruitment: 139 },
  { name: 'Mar', enrollment: 200, recruitment: 980 },
  { name: 'Apr', enrollment: 278, recruitment: 390 },
  { name: 'May', enrollment: 189, recruitment: 480 },
  { name: 'Jun', enrollment: 239, recruitment: 380 },
  { name: 'Jul', enrollment: 349, recruitment: 430 }
];

export const sampleBarData = [
  { name: 'Engineering', count: 120 },
  { name: 'Design', count: 80 },
  { name: 'Operations', count: 50 },
  { name: 'HR & Talent', count: 40 },
  { name: 'Marketing', count: 60 }
];

export const samplePieData = [
  { name: 'Active', value: 400 },
  { name: 'Pending', value: 300 },
  { name: 'Inactive', value: 100 }
];
