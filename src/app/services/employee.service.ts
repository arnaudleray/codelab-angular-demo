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
    private http: HttpClient // Nouveau client HTTP depuis Angular 4.3
  ) { }

  getEmployeesMock(): Employee[] {
    return EMPLOYEES;
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${BASE_URL}/employees`);
  }

  getEmployee(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${BASE_URL}/employees/${employeeId}`);
  }
}
