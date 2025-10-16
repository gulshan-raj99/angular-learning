import { Routes } from '@angular/router';
import { EmployeeDetails } from './components/employee-details/employee-details';
import { IndividualEmployeeDetail } from './components/individual-employee-detail/individual-employee-detail';
import { ParentEmployee } from './components/parent-employee/parent-employee';

export const routes: Routes = [
    {path:'', component:EmployeeDetails},
    {path:'employee/:name', component:IndividualEmployeeDetail},
    {path: 'parent', component:ParentEmployee}
];
