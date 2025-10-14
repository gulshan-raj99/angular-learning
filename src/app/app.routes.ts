import { Routes } from '@angular/router';
import { EmployeeDetails } from './components/employee-details/employee-details';
import { IndividualEmployeeDetail } from './components/individual-employee-detail/individual-employee-detail';

export const routes: Routes = [
    {path:'', component:EmployeeDetails},
    {path:'employee/:name', component:IndividualEmployeeDetail}
];
