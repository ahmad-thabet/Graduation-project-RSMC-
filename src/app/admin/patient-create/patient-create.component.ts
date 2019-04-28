import {Component, OnInit} from '@angular/core';
import {Patient} from '../../models/patient.model';
import {City} from '../../models/city.model';
import {Quantom} from '../../models/quantom.model';
import {PatinetSeviceService} from '../../service/patinet-sevice.service';
import {InsuranceServiceService} from '../../service/insurance-service.service';
import {Insurance} from '../../models/insurance.model';
import {Subinsurance} from '../../models/subinsurance.model';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {
  // TODO: implement insurance stuff as null by default
  patient = new Patient('', '', '', '', '', '',
    new Date(), '', '', '', '', 0,
    '', '', '', '', '');

  insurance = new Insurance(0, ' ');
  subinsurance = new Subinsurance(0, 0, 0, '');
  quantom: Quantom[];
  cities: City[];
  error = '';
  success = '';
  patients: Patient[];
  insurances: Insurance[];
  subincurances: Subinsurance[];
  hasInsurance: false;
  hasParent: false;
  personalIDMatch: any;

  constructor(private patinetservice: PatinetSeviceService, private insuranceservice: InsuranceServiceService) {
  }

  ngOnInit() {
    this.loadCities();
    this.loadquantom();
    this.loadpatient();
    this.loadinsurance();
    this.loadsubinsurance();
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

  private loadinsurance() {
    this.insuranceservice.getinsurance().subscribe(
      (res: Insurance[]) => {
        this.insurances = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  private loadsubinsurance() {
    this.insuranceservice.getsubinsurance().subscribe(
      (res: Subinsurance[]) => {
        this.subincurances = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
