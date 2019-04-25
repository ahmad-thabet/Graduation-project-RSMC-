import {Component, OnInit} from '@angular/core';
import {DoctorServiceService} from '../../service/doctor-service.service';

@Component({
  selector: 'app-doctor-vacation',
  templateUrl: './doctor-vacation.component.html',
  styleUrls: ['./doctor-vacation.component.css']
})
export class DoctorVacationComponent implements OnInit {
  selectedDate: Date = new Date();
  fromtime: Date = new Date();
  totime: Date = new Date();
  notes = '';

  constructor(private doctorService: DoctorServiceService) {
  }

  ngOnInit() {
  }

  // TODO: implement this function
  /*  add_vacation(f) {
      this.doctorService.add_vacation()
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
