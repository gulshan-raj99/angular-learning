import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChildEmployee } from '../child-employee/child-employee';

@Component({
  selector: 'app-parent-employee',
  imports: [CommonModule,ChildEmployee],
  templateUrl: './parent-employee.html',
  styleUrl: './parent-employee.css'
})
export class ParentEmployee {

  employees = [
    {name: 'john', age: 30, gender: 'Male', company: 'Accenture'},
    {name: 'mary', age: 25, gender: 'Female', company: 'Google'},
    {name: 'peter', age: 26, gender: 'Male', company: 'Microsoft'}
  ]

  selectedEmployee: any = null;

  // send data to child component
  selectEmployee(emp: any) {
    this.selectedEmployee = emp
  }

  // receive data from child component

  onUpdateEmployee(updatedData: any) {
    const index = this.employees.findIndex(e => e.name === updatedData.name);
    if(index !== -1) {
      this.employees[index] = updatedData;
      alert(`${updatedData.name}'s data updated successfully!`);
    }
  }

}
