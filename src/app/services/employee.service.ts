import { UtilsService } from './utils.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Employee } from '../models/employee.model';

const BASE_URL = 'https://employee-directory-services.herokuapp.com';
// const BASE_URL = 'http://localhost:3000'; // For local JSON-Server
const EMPLOYEES = [ /* contenu précédent */];

@Injectable()
export class EmployeeService {
  constructor(
    private http: HttpClient, // Nouveau client HTTP depuis Angular 4.3
    private utils: UtilsService
  ) { }

  getEmployeesMock(): Employee[] {
    return EMPLOYEES;
  }

  getEmployees(): Promise<Employee[]> {
    return this.utils.toPromise(this.http.get<Employee[]>(`${BASE_URL}/employees`));
  }

  getEmployee(employeeId: number): Promise<Employee> {
    return this.utils.toPromise(this.http.get<Employee>(`${BASE_URL}/employees/${employeeId}`));
  }
}
