import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees;

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployeesMock();
  }

  goToInfo(employee) {
    this.router.navigate(['/employees', employee.id]);
  }
}
