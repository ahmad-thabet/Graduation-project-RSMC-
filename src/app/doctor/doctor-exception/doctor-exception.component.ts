import {Component, OnInit} from '@angular/core';
import {DoctorServiceService} from '../../service/doctor-service.service';
import {Exception} from '../../models/exception.model';

@Component({
  selector: 'app-doctor-exception',
  templateUrl: './doctor-exception.component.html',
  styleUrls: ['./doctor-exception.component.css']
})
export class DoctorExceptionComponent implements OnInit {
  exception = new Exception(0, 0, new Date(), '', '', '', false);
  selectedDate: Date = new Date();
  fromtime: Date = new Date();
  totime: Date = new Date();
  notes = '';
  exceptions: Exception[];
  success = '';
  error = '';

  constructor(private doctorService: DoctorServiceService) {
  }

  ngOnInit() {
    this.loadexceprion();
  }

  /*  add_exception(f) {
      this.doctorService.add_exception()
        .subscribe(
          (res: Any[]) => {
            // Update the list of cars
            this.patients = res;
            // Inform the user
            console.log(this.patients);
            this.success = 'Created successfully';
            console.log(this.success);
            // Reset the form
            f.reset();
          },
          (err) => this.error = err
        );
    }*/
  add_exception(f) {
    this.doctorService.add_exception(this.exception)
      .subscribe(
        (res: Exception[]) => {
          // Update the list of cars
          this.exceptions = res;
          //  the user
          console.log(this.exceptions);
          this.success = 'Created successfully';
          console.log(this.exceptions);
          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );
  }

  private loadexceprion() {
    this.doctorService.get_exception().subscribe(
      (res: Exception[]) => {
        this.exceptions = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
