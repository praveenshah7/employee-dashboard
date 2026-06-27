import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'Rahul Sharma', email: 'rahul@company.com', department: 'Engineering', salary: 75000, joinDate: '2022-01-15', status: 'Active' },
    { id: 2, name: 'Priya Singh', email: 'priya@company.com', department: 'HR', salary: 55000, joinDate: '2021-06-10', status: 'Active' },
    { id: 3, name: 'Amit Kumar', email: 'amit@company.com', department: 'Finance', salary: 65000, joinDate: '2020-03-22', status: 'Inactive' },
    { id: 4, name: 'Neha Gupta', email: 'neha@company.com', department: 'Marketing', salary: 60000, joinDate: '2023-02-01', status: 'Active' },
    { id: 5, name: 'Vikram Patel', email: 'vikram@company.com', department: 'Engineering', salary: 80000, joinDate: '2019-11-05', status: 'Active' },
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.employees.find(e => e.id === id);
  }

  addEmployee(employee: Employee): void {
    employee.id = this.employees.length + 1;
    this.employees.push(employee);
  }

  updateEmployee(updated: Employee): void {
    const index = this.employees.findIndex(e => e.id === updated.id);
    if (index !== -1) this.employees[index] = updated;
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(e => e.id !== id);
  }
}