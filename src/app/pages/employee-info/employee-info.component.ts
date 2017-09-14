import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {

  employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private utils: UtilsService
  ) { }

  async ngOnInit() {
    //   this.route.params.subscribe(params => {
    //     this.employeeService.getEmployee(params['id']).subscribe(
    //       (employee: Employee) => {
    //         this.employee = employee;
    //       },
    //       (error: any) => {
    //         alert('ERROR: ' + JSON.stringify(error));
    //       }
    //     );
    //   });
    try {
      const params = await this.utils.toPromise(this.route.params);
      this.employee = await this.employeeService.getEmployee(params['id']);
    } catch (error) {
      console.error(error);
    }
  }

}
