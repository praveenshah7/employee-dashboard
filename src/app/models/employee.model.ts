export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
  joinDate: string;
  status: 'Active' | 'Inactive';
}