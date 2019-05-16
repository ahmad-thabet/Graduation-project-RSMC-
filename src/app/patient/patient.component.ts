import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientID = 401110796;

  constructor() {
  }

  ngOnInit() {
  }

}
