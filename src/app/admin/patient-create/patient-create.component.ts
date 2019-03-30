import {Component, OnInit} from '@angular/core';
import {Patient} from '../../models/patient.model';
import {Quantom} from '../../models/quantom.model';
import {City} from '../../models/city.model';


@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {
  patients: Patient[] = [];
  patient = new Patient('', '', '', '', '', '',
    new Date(), '', '', 0, 0, '',
    '', '', '', '', '');
  quantom: Quantom[];
  cities: City[];

  constructor() {
  }

  ngOnInit() {
  }

}
