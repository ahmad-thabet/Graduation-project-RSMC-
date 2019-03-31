import {Component, OnInit} from '@angular/core';
import {Employee} from '../../models/employee.model';
import {Quantom} from '../../models/quantom.model';
import {City} from '../../models/city.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  emp = new Employee('', '', '', '', '', '', '', '', new Date()
    , '', '', '', '', '', '', '', '', '');

  quantom: Quantom[];
  cities: City[];

  error = '';
  success = '';
  emps: Employee[];

  constructor() {
  }

  ngOnInit() {
  }

}
