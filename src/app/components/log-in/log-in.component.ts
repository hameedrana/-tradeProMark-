import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  constructor(private router: Router){}

   // Simulate a login function
   onLogin() {
    // After successful login, navigate to home page
    this.router.navigate(['/dashboard']);
  }
}
