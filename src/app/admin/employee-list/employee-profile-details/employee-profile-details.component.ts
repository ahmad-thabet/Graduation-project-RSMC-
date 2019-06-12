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

  allActivity: Activity[] = [
    {
      patientID: 23,
      firstname: 'Ahmad',
      lastname: 'Thabet',
      activity: 'reservation',
      date: '2019-01-01'
    }, {
      patientID: 33,
      firstname: 'samer',
      lastname: 'saed',
      activity: 'reservation',
      date: '2019-01-04'
    }, {
      patientID: 3333,
      firstname: 'Moe',
      lastname: 'seif',
      activity: 'reservation',
      date: '2019-03-05'
    }

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

interface Activity {
  patientID: number;
  firstname: string;
  lastname: string;
  activity: string;
  date: string;
}
