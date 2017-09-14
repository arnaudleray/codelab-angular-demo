import { UtilsService } from './services/utils.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeInfoComponent } from './pages/employee-info/employee-info.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeInfoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'codelab-angular' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
