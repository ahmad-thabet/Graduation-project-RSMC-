import {Component, OnInit} from '@angular/core';
import {DoctorServiceService} from '../../service/doctor-service.service';

@Component({
  selector: 'app-doctor-exception',
  templateUrl: './doctor-exception.component.html',
  styleUrls: ['./doctor-exception.component.css']
})
export class DoctorExceptionComponent implements OnInit {
  selectedDate: Date = new Date();
  fromtime: Date = new Date();
  totime: Date = new Date();
  notes = '';

  constructor(private doctorService: DoctorServiceService) {
  }

  ngOnInit() {
  }

  // TODO: implement this function
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

}
