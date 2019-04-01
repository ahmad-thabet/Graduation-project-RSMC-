import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../models/employee.model';
import {EmployeeServiceService} from '../../../service/employee-service.service';

@Component({
  selector: 'app-employee-list-full',
  templateUrl: './employee-list-full.component.html',
  styleUrls: ['./employee-list-full.component.css']
})
export class EmployeeListFullComponent implements OnInit {
  emp = new Employee('', '', '', '', '', '', '', '', new Date()
    , '', '', '', '', '', '', '', '', '');

  error = '';
  success = '';
  employees: Employee[];

  constructor(private employeeservice: EmployeeServiceService) {
  }

  ngOnInit() {
    this.loademployee();
  }

  private loademployee() {
    this.employeeservice.get_employee().subscribe(
      (res: Employee[]) => {
        this.employees = res;
        console.log(this.employees);
      },
      (err) => {
        this.error = err;
      }
    );
  }


}
