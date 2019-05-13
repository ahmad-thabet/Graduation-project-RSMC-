import {Component, OnInit} from '@angular/core';
import {Vacation} from '../../models/vacation.model';
import {Time} from '@angular/common';
import {DoctorServiceService} from '../../service/doctor-service.service';

@Component({
  selector: 'app-vacation-date',
  templateUrl: './vacation-date.component.html',
  styleUrls: ['./vacation-date.component.css']
})
export class VacationDateComponent implements OnInit {
  vec = new Vacation(0, 0, new Date(), '', '', '');
  vacations: Vacation[];
  sucssess = '';
  error = '';

  constructor(private doctorService: DoctorServiceService) {
  }

  ngOnInit() {
    this.loadvacation();
  }

  // add_employee(f) {
  //   this.employeeservice.add_employee(this.employee)
  //     .subscribe(
  //       (res: Employee[]) => {
  //         // Update the list of cars
  //         this.employees = res;
  //         // Inform the user
  //         console.log(this.employees);
  //         this.success = 'Created successfully';
  //         console.log(this.success);
  //         // Reset the form
  //         f.reset();
  //       },
  //       (err) => this.error = err
  //     );
  // }
  private loadvacation() {
    this.doctorService.get_vacation().subscribe(
      (res: Vacation[]) => {
        this.vacations = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
