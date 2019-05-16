import {Component, OnInit} from '@angular/core';
import {Patient} from '../../../models/patient.model';
import {PatinetSeviceService} from '../../../service/patinet-sevice.service';
import {Insurance} from '../../../models/insurance.model';
import {InsuranceServiceService} from '../../../service/insurance-service.service';

@Component({
  selector: 'app-patient-list-full',
  templateUrl: './patient-list-full.component.html',
  styleUrls: ['./patient-list-full.component.css']
})
export class PatientListFullComponent implements OnInit {
  patients: Patient[];
  error = '';
  success = '';


  constructor(private patientservice: PatinetSeviceService,
              private insuranceService: InsuranceServiceService) {
  }

  ngOnInit() {
    this.loadpatient();
  }

  private loadpatient() {
    this.patientservice.get_patient().subscribe(
      (res: Patient[]) => {
        this.patients = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

}
