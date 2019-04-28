import {Component, OnInit} from '@angular/core';
import {Clinic} from '../../../models/clinic.model';
import {ActivatedRoute, Params} from '@angular/router';
import {ClinicServiceService} from '../../../service/clinic-service.service';
import {Employee} from '../../../models/employee.model';

@Component({
  selector: 'app-clinic-details',
  templateUrl: './clinic-details.component.html',
  styleUrls: ['./clinic-details.component.css']
})
export class ClinicDetailsComponent implements OnInit {
  id: number;

  clinic: Clinic;
  clinics: Clinic[] = [];

  success = '';
  error = '';

  // TODO: implement doctor model
  doctors: Employee[];
  AllDoctors: Employee[]; // all docotors in the system

  constructor(private clinicService: ClinicServiceService,
              public route: ActivatedRoute) {
  }

  ngOnInit() {
    // this will return clinic by id
    const id = this.route.params.subscribe((params: Params) => {
      this.id = +params[`id`];
      this.clinic = this.clinicService.clinics[this.id];
    });
  }

  add_doctorClinic(f) {
    this.clinicService.add_doctorClinic(this.clinic)
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

  private loadClinics() {
    this.clinicService.get_clinic().subscribe(
      (res: Clinic[]) => {
        this.clinics = res;
        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
