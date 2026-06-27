import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit {
  isEdit = false;
  employee: Employee = {
    id: 0, name: '', email: '', department: '',
    salary: 0, joinDate: '', status: 'Active'
  };

  departments = ['Engineering', 'HR', 'Finance', 'Marketing', 'Operations'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      const emp = this.employeeService.getEmployeeById(+id);
      if (emp) this.employee = { ...emp };
    }
  }

  onSubmit() {
    if (this.isEdit) {
      this.employeeService.updateEmployee(this.employee);
    } else {
      this.employeeService.addEmployee(this.employee);
    }
    this.router.navigate(['/employees']);
  }
}