import { Component } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  imports: [CommonModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css'
})
export class EmployeeDetails {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,
    private router: Router
  ){}

  ngOnInit(){
    this.employees = this.employeeService.getEmployees();
  }

  viewEmployee(emp: Employee){
     // navigate to individual employee page with name or id as parameter
    this.router.navigate(['/employee', emp.name])
  }
}
