import {Component, OnInit} from '@angular/core';
import {Employee} from '../../models/employee.model';
import {Quantom} from '../../models/quantom.model';
import {City} from '../../models/city.model';
import {EmployeeServiceService} from '../../service/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
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
