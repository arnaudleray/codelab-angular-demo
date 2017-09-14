import { Injectable } from '@angular/core';

const EMPLOYEES = [
  {
    'id': 1,
    'firstName': 'Amy',
    'lastName': 'Taylor',
    'title': 'CEO',
    'phone': '617-123-4567',
    'mobilePhone': '617-987-6543',
    'email': 'amy@fakemail.com',
    'picture': 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg'
  },
  {
    'id': 2,
    'firstName': 'Anup',
    'lastName': 'Gupta',
    'title': 'VP of Engineering',
    'managerId': 1,
    'managerName': 'Amy Taylor',
    'phone': '617-123-4567',
    'mobilePhone': '617-987-6543',
    'email': 'anup@fakemail.com',
    'picture': 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg'
  },
  {
    'id': 3,
    'firstName': 'Michael',
    'lastName': 'Jones',
    'title': 'VP of Marketing',
    'managerId': 1,
    'managerName': 'Amy Taylor',
    'phone': '617-123-4567',
    'mobilePhone': '617-987-6543',
    'email': 'michael@fakemail.com',
    'picture': 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg'
  },
];

@Injectable()
export class EmployeeService {

  constructor(
  ) { }

  getEmployeesMock() {
    return EMPLOYEES;
  }
}
