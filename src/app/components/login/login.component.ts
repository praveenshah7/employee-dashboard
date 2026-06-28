import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email === 'admin@company.com' && this.password === 'admin123') {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid email or password!';
    }
  }
}