import {Component, OnInit} from '@angular/core';
import {Patient} from '../../models/patient.model';
import {City} from '../../models/city.model';
import {Quantom} from '../../models/quantom.model';
import {PatinetSeviceService} from '../../service/patinet-sevice.service';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {
  patient = new Patient('', '', '', '', '', '',
    new Date(), '', '', '', '', '',
    '', '', '', '', '');
  quantom: Quantom[];
  cities: City[];
  error = '';
  success = '';
  patients: Patient[];

  constructor(private patinetservice: PatinetSeviceService) {
  }

  ngOnInit() {
    this.loadCities();
    this.loadquantom();
    this.loadpatient();
  }

  add_patient(f) {
    this.patinetservice.add_patient(this.patient)
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
        },
        (err) => this.error = err
      );
  }

  private loadCities() {
    this.patinetservice.getcity().subscribe(
      (res: City[]) => {
        this.cities = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  private loadpatient() {
    this.patinetservice.get_patient().subscribe(
      (res: Patient[]) => {
        this.patients = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  private loadquantom() {
    this.patinetservice.getquantom().subscribe(
      (res: Quantom[]) => {
        this.quantom = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

}
