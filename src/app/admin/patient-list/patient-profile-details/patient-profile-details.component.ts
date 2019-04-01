import {Component, OnInit} from '@angular/core';
import {Patient} from '../../../models/patient.model';
import {Quantom} from '../../../models/quantom.model';
import {City} from '../../../models/city.model';
import {PatinetSeviceService} from '../../../service/patinet-sevice.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-patient-profile-details',
  templateUrl: './patient-profile-details.component.html',
  styleUrls: ['./patient-profile-details.component.css']
})
export class PatientProfileDetailsComponent implements OnInit {

  patient: Patient;
  id: number;
  quantom: Quantom;
  cities: City;

  constructor(private patientService: PatinetSeviceService,
              public route: ActivatedRoute) {
  }

  ngOnInit() {
    // this will return patient by id
    const id = this.route.params.subscribe((params: Params) => {
      this.id = +params[`id`];
      // this.patient = this.patientService.getPatientById(this.id);
      this.patient = new Patient('Ahmad', 'Jamal', 'Ahmad', 'Thabet',
        'ahmad.j.thabet@gmail.com', 'pp', new Date(),
        '0598223589', '0598223589', '8908', '90909090', 'trust',
        'male', 'Ramallah', 'Ramallah', 'Ramallah', '96682828282');
    });
  }

}
