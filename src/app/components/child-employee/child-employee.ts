import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-employee',
  imports: [CommonModule,FormsModule],
  templateUrl: './child-employee.html',
  styleUrl: './child-employee.css'
})
export class ChildEmployee {

   @Input() employee: any; // to receive data from parent component
   @Output() employeeUpdated = new EventEmitter<any>(); // to send data to parent component


   updateEmployee(){
    if(this.employee) {
      this.employeeUpdated.emit(this.employee);
    }
   }

}
