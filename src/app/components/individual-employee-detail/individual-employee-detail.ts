import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee-service';

@Component({
  selector: 'app-individual-employee-detail',
  imports: [CommonModule],
  templateUrl: './individual-employee-detail.html',
  styleUrl: './individual-employee-detail.css'
})
export class IndividualEmployeeDetail {
  employee?: Employee;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ){}

  ngOnInit(){
    const name = this.route.snapshot.paramMap.get('name');
    if(name){
      this.employee = this.employeeService.getEmployees().find(e => e.name === name);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
