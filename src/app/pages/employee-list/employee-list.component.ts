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
