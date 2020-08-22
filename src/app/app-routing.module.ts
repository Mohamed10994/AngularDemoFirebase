import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: '', component: EmployeeComponent},
    {path: 'employeelist', component: EmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }