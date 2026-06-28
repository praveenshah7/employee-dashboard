import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  totalEmployees = 0;
  activeEmployees = 0;
  departments = 0;
  avgSalary = 0;
  recentEmployees: Employee[] = [];
  departmentStats: { name: string; count: number; color: string }[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    const employees = this.employeeService.getEmployees();
    this.totalEmployees = employees.length;
    this.activeEmployees = employees.filter(e => e.status === 'Active').length;
    this.departments = new Set(employees.map(e => e.department)).size;
    this.avgSalary = Math.round(employees.reduce((sum, e) => sum + e.salary, 0) / employees.length);
    this.recentEmployees = employees.slice(-3).reverse();

    const colors = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#3b82f6'];
    const deptMap = new Map<string, number>();
    employees.forEach(e => deptMap.set(e.department, (deptMap.get(e.department) || 0) + 1));
    this.departmentStats = Array.from(deptMap.entries()).map(([name, count], i) => ({
      name, count, color: colors[i % colors.length]
    }));
  }

  getBarWidth(count: number): string {
    return (count / this.totalEmployees * 100) + '%';
  }
}