import {Component, OnInit} from '@angular/core';
import {Clinic} from '../../../models/clinic.model';
import {PatinetSeviceService} from '../../../service/patinet-sevice.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-clinic-details',
  templateUrl: './clinic-details.component.html',
  styleUrls: ['./clinic-details.component.css']
})
export class ClinicDetailsComponent implements OnInit {
  id: number;
  clinic: Clinic;
  clinics: Clinic[];

  success = '';
  error = '';

  // TODO: implement doctor model
  doctors: any[];
  AllDoctors: any[];

  constructor(private patientService: PatinetSeviceService,
              public route: ActivatedRoute) {
  }

  ngOnInit() {
    // this will return patient by id
    const id = this.route.params.subscribe((params: Params) => {
      this.id = +params[`id`];
      this.clinic = this.patientService.clinics[this.id];
    });
  }

  add_doctorClinic(f) {
    this.patientService.add_doctorClinic(this.clinic)
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
