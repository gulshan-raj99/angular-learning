import { Component } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  imports: [CommonModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css'
})
export class EmployeeDetails {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService){}

  ngOnInit(){
    this.employees = this.employeeService.getEmployees();
  }
}
