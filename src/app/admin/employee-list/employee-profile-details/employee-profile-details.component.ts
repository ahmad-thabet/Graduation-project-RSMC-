import {Component, OnInit} from '@angular/core';
import {Quantom} from '../../../models/quantom.model';
import {City} from '../../../models/city.model';
import {Employee} from '../../../models/employee.model';
import {EmployeeServiceService} from '../../../service/employee-service.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-employee-profile-details',
  templateUrl: './employee-profile-details.component.html',
  styleUrls: ['./employee-profile-details.component.css']
})
export class EmployeeProfileDetailsComponent implements OnInit {
  employee: Employee;
  id: number;
  quantom: Quantom;
  cities: City;

  fromdate = new Date();
  todate = new Date();

  allActivity: any[] = [
    {activity: 'Reservation for id 10', date: new Date()},
    {activity: 'Payment for id 12', date: new Date()},
    {activity: 'Reservation for id 17', date: new Date()},
  ];

  constructor(private employeeService: EmployeeServiceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this will return patient by id
    const id = this.route.params.subscribe((params: Params) => {
      this.id = +params[`id`];
      this.employee = this.employeeService.employees[this.id];
    });
  }

  onDateChanged() {
    // do query when date changed
    // TODO: implement this
  }
}
