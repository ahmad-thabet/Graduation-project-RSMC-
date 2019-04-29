import {Component, OnInit} from '@angular/core';
import {Clinic} from '../../../models/clinic.model';
import {ActivatedRoute, Params} from '@angular/router';
import {ClinicServiceService} from '../../../service/clinic-service.service';
import {Employee} from '../../../models/employee.model';
import {ClinicDoctor} from '../../../models/clinic-doctor.model';

@Component({
  selector: 'app-clinic-details',
  templateUrl: './clinic-details.component.html',
  styleUrls: ['./clinic-details.component.css']
})
export class ClinicDetailsComponent implements OnInit {
  id: number;
  clinicdoctor = new ClinicDoctor(0, this.id);
  clinic = new Clinic('', 0);
  employee = new Employee('', '', '', '', '', '', '', '', new Date(), '', '', '', '', '',
    '', '', '', '');
  doctors: Employee[];
  clinics: Clinic[] = [];
  alldoctors: ClinicDoctor[];
  success = '';
  error = '';

  hasDiscount: false;

  // TODO: implement doctor model
  AllInsurance: any[];
  AllMempership: any[];


  constructor(private clinicService: ClinicServiceService,
              public route: ActivatedRoute) {
  }

  ngOnInit() {
    // this will return clinic by id
    const id = this.route.params.subscribe((params: Params) => {
      this.id = +params[`id`];
      this.clinic = this.clinicService.clinics[this.id];
    });
    this.loadalldoctors();
    this.loadClinics();
    this.loaddoctors();
  }

  add_doctorClinic(f) {
    this.clinicService.add_doctorClinic(this.clinicdoctor)
      .subscribe(
        // change type from any to clinics
        (res: ClinicDoctor[]) => {
          // Update the list of cars
          this.alldoctors = res;
          // Inform the user
          console.log(this.alldoctors);
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

  update_insurance_price(f) {

  }

  add_insurance_price(f) {

  }

  private loadalldoctors() {
    this.clinicService.get_clinic_doctors().subscribe(
      (res: ClinicDoctor[]) => {
        this.alldoctors = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  private loaddoctors() {
    this.clinicService.getdoctors().subscribe(
      (res: Employee[]) => {
        this.doctors = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
