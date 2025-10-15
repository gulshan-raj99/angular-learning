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
      isEditMode: boolean = false;

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
        this.isEditMode = true;
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

      openAddModal() {
        this.isEditMode = false;
        this.selectedEmployee = null;
        this.employeeForm = this.fb.group({
          name: [''],
          age: [''],
          gender: ['Male'],
          currentCompany: [''],
          dateOfJoining: [''],
        });
      }

      saveChanges(){
        if(this.employeeForm.valid){
          const empData: Employee = {
            ...this.employeeForm.value,
            dateOfJoining: new Date(this.employeeForm.value.dateOfJoining)
          };
          if(this.isEditMode && this.selectedEmployee){
            const index = this.employees.findIndex((e) => e.name === this.selectedEmployee?.name);
            if(index !== -1){
              this.employees[index] = empData;
              this.employeeService.updateEmployee(this.employees);
            }
          } else {
            this.employeeService.addEmployee(empData);
            this.employees = this.employeeService.getEmployees();
          }
          this.closeModel();
        }
      }

      closeModel(){
        this.selectedEmployee = null;
        this.employeeForm = null as any;
      }

      deleteEmployee(emp: Employee){
        const confirmed = confirm(`Are you sure you want to delete ${emp.name}?`);
        if(confirmed){
          this.employees = this.employees.filter((e) => e.name !== emp.name);
          this.employeeService.updateEmployee(this.employees);
        }
      }
  }
