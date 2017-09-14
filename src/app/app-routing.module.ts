import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeInfoComponent } from './pages/employee-info/employee-info.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/employees', pathMatch: 'full'
  },
  {
    path: 'employees', component: EmployeeListComponent
  },
  {
    path: 'employees/:id', component: EmployeeInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
