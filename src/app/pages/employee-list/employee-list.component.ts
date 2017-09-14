import { TransferState } from '../../../modules/transfer-state/transfer-state';
import { UtilsService } from '../../services/utils.service';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
    private employeeService: EmployeeService,
    private transferState: TransferState,
    private utils: UtilsService,
    private meta: Meta,
    private title: Title,
  ) {
    this.title.setTitle('Liste des employés');
    this.meta.addTags([
      { name: 'keywords', content: 'angular universal, ssl, codelab, employees' },
      { name: 'description', content: 'Liste des employés pour illustrer le Codelab' },
      { property: 'og:site_name', content: 'Codelab Angular' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: '...' },
      { property: 'og:title', content: 'Accueil - Bonduelle Food Service' },
    ]);
  }

  async ngOnInit() {
    // Check if the employee list is already in the TransferState.
    let isEmployeeListInTransferState: boolean;
    if (this.utils.isBrowser) {
      const res = this.transferState.get('EMPLOYEES_API_RESULT');
      if (res) {
        this.employees = res;
        isEmployeeListInTransferState = true;
      }
    }

    // Not in TransferState => call the service.
    if (!isEmployeeListInTransferState) {
      this.isLoading = true;
      try {
        this.employees = await this.employeeService.getEmployees();
        if (!this.utils.isBrowser) {
          // Server => save the result in Transfer state.
          this.transferState.set('EMPLOYEES_API_RESULT', this.employees);
          this.transferState.inject();
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    }
  }

  goToInfo(employee) {
    this.router.navigate(['/employees', employee.id]);
  }
}
