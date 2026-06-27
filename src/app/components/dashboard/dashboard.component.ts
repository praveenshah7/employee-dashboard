import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  totalEmployees = 0;
  activeEmployees = 0;
  departments = 0;
  avgSalary = 0;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    const employees = this.employeeService.getEmployees();
    this.totalEmployees = employees.length;
    this.activeEmployees = employees.filter(e => e.status === 'Active').length;
    this.departments = new Set(employees.map(e => e.department)).size;
    this.avgSalary = Math.round(employees.reduce((sum, e) => sum + e.salary, 0) / employees.length);
  }
}