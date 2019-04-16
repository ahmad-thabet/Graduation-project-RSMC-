import {Component, OnInit} from '@angular/core';
import {PatinetSeviceService} from '../../../service/patinet-sevice.service';

@Component({
  selector: 'app-clinic-create',
  templateUrl: './clinic-create.component.html',
  styleUrls: ['./clinic-create.component.css']
})
export class ClinicCreateComponent implements OnInit {
  clinics = [];
  clinic = '';

  error = '';
  success = '';

  constructor(private patientService: PatinetSeviceService) {
  }

  ngOnInit() {
  }

  add_clinic(f) {
    this.patientService.add_clinic(this.clinic)
      .subscribe(
        // change type from any to clinics
        (res: any[]) => {
          // Update the list of cars
          this.clinics = res;
          // Inform the user
          console.log(this.clinics);
          this.success = 'Created successfully';
          console.log(this.success);
          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );


  }
}
