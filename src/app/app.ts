import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeDetails } from "./components/employee-details/employee-details";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-learning');
}
