import {Component, OnInit} from '@angular/core';
import {Patient} from '../../../models/patient.model';
import {Quantom} from '../../../models/quantom.model';
import {City} from '../../../models/city.model';
import {PatinetSeviceService} from '../../../service/patinet-sevice.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-patient-edit-details',
  templateUrl: './patient-edit-details.component.html',
  styleUrls: ['./patient-edit-details.component.css']
})
export class PatientEditDetailsComponent implements OnInit {

  patient = new Patient('', '', '', '', '', '',
    new Date(), '', '', '', '', '',
    '', '', '', '', '');


  quantom: Quantom[];
  cities: City[];
  error = '';
  success = '';
  patients: Patient[];
  id: number;

  insuranceCompanyList: [];
  insuranceTypeList: [];

  hasParent: boolean;
  hasInsurance: boolean;


  constructor(private patientService: PatinetSeviceService,
              public route: ActivatedRoute,
              public router: Router) {
  }

  ngOnInit() {
    this.loadCities();
    this.loadquantom();
    this.loadpatient();

    // this will return patient by id
    const i = this.route.params.subscribe((params: Params) => {
      this.id = +params[`id`];
      this.patients = this.patientService.patients;
      this.patient = this.patients[this.id];

      /*      this.patient = new Patient('Ahmad', 'Jamal', 'Ahmad', 'Thabet',
              'ahmad.j.thabet@gmail.com', 'pp', new Date(),
              '0598223589', '0598223589', '8908', '90909090', 'trust',
              'male', 'Ramallah', 'Ramallah', 'Ramallah', '96682828282');*/
    });


  }


  edit_patient(f) {
    this.patientService.UpdatePatient(this.patient)
      .subscribe(
        (res: Patient[]) => {
          // Update the list of cars
          this.patients = res;
          // Inform the user
          console.log(this.patients);
          this.success = 'Created successfully';
          console.log(this.success);
          // Reset the form
          f.reset();
          this.router.navigate(['../']);
        },
        (err) => this.error = err
      );
  }

  private loadCities() {
    this.patientService.getcity().subscribe(
      (res: City[]) => {
        this.cities = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  private loadpatient() {
    this.patientService.get_patient().subscribe(
      (res: Patient[]) => {
        this.patients = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  private loadquantom() {
    this.patientService.getquantom().subscribe(
      (res: Quantom[]) => {
        this.quantom = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

}
