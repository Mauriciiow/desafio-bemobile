export interface EmployeesItem {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
  [key: string]: string | number;
}
