import {Component, OnInit} from '@angular/core';
import {Quantom} from '../../models/quantom.model';
import {City} from '../../models/city.model';
import {Employee} from '../../models/employee.model';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employee = new Employee('', '', '', '', '', '', '', '', new Date()
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


  add_employee(f) {
/*    this.empService.add_emp(this.employee)
      .subscribe(
        (res: Employee[]) => {
          // Update the list of cars
          this.emps = res;
          // Inform the user
          console.log(this.emps);
          this.success = 'Created successfully';
          console.log(this.success);
          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );*/
  }
}
