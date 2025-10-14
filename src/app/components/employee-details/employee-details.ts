import { Component } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css'
})
export class EmployeeDetails {

  employees: Employee[] = [];
  selectedEmployee?: Employee | null = null;
  employeeForm!: FormGroup;

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private fb: FormBuilder
  ){}

  ngOnInit(){
    this.employees = this.employeeService.getEmployees();
  }

  viewEmployee(emp: Employee){
    // navigate to individual employee page with name or id as parameter
    this.router.navigate(['/employee', emp.name]);
  }

  openModel(emp: Employee){
    this.selectedEmployee = emp;
    // Convert date to yyyy-MM-dd string for input[type=date]
    const dateStr = emp.dateOfJoining instanceof Date
      ? emp.dateOfJoining.toISOString().substring(0, 10)
      : emp.dateOfJoining;
    this.employeeForm = this.fb.group({
      name: [emp.name],
      age: [emp.age],
      gender: [emp.gender],
      currentCompany: [emp.currentCompany],
      dateOfJoining: [dateStr]
    });
  }

  saveChanges(){
    if(this.employeeForm.valid && this.selectedEmployee){
      const index = this.employees.findIndex((e) => e.name === this.selectedEmployee?.name);
      if(index !== -1){
        const updated = {
          ...this.employeeForm.value,
          dateOfJoining: new Date(this.employeeForm.value.dateOfJoining)
        };
        this.employees[index] = updated;
        this.employeeService.updateEmployee(this.employees);
      }
      this.closeModel();
    }
  }

  closeModel(){
    this.selectedEmployee = null;
  }

  deleteEmployee(emp: Employee){
    const confirmed = confirm(`Are you sure you want to delete ${emp.name}?`);
    if(confirmed){
      this.employees = this.employees.filter((e) => e.name !== emp.name);
      this.employeeService.updateEmployee(this.employees);
    }
  }
}
