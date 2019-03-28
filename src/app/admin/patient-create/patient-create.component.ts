import {Component, OnInit} from '@angular/core';
import {Patient} from '../../models/patient.model';


@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {
  patient = new Patient('', '', '', '', '', '',
    new Date(), '', '', 0, 0, '',
    '', '', '', '', '');

  constructor() {
  }

  ngOnInit() {
  }

}
