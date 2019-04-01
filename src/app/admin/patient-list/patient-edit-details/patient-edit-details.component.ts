import {Component, OnInit} from '@angular/core';
import {Patient} from '../../../models/patient.model';
import {Quantom} from '../../../models/quantom.model';
import {City} from '../../../models/city.model';
import {PatinetSeviceService} from '../../../service/patinet-sevice.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-patient-edit-details',
  templateUrl: './patient-edit-details.component.html',
  styleUrls: ['./patient-edit-details.component.css']
})
export class PatientEditDetailsComponent implements OnInit {
  patient: Patient;
  id: number;
  quantom: Quantom;
  cities: City;

  constructor(private patientService: PatinetSeviceService,
              public route: ActivatedRoute) {
  }

  ngOnInit() {
    // this will return patient by id
    const i = this.route.params.subscribe((params: Params) => {
      this.id = +params[`id`];
      this.patient = this.patientService.getPatientById(this.id);
    });
  }

}
