import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  public employees: Employee[] = [
    {
      name: 'Gulshan Raj',
      age: 26,
      gender: 'Male',
      currentCompany: 'Accenture',
      dateOfJoining: new Date('2021-05-28')
    },
    {
      name: 'Manish Kumar',
      age: 26,
      gender: 'Male',
      currentCompany: 'Ilink Digital',
      dateOfJoining: new Date('2025-10-11')
    },
    {
      name: 'Priya Sharma',
      age: 25,
      gender: 'Female',
      currentCompany: 'Microsoft',
      dateOfJoining: new Date('2021-10-24')
    }
  ]

  getEmployees(): Employee[] {
    return this.employees;
  }

  updateEmployee(updateEmployeeList: Employee[]){
    this.employees = updateEmployeeList;
  }
}
