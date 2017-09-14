import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  isLoading: boolean;

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  async ngOnInit() {
    this.isLoading = true;
    try {
      this.employees = await this.employeeService.getEmployees();
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  goToInfo(employee) {
    this.router.navigate(['/employees', employee.id]);
  }
}
