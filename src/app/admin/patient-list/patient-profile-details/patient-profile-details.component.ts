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

  fromdate = new Date();
  todate = new Date();

  // TODO: configure these as needed
  family: any[] = [
    {firstname: 'Ahmad', relationship: 'Son', id: '1'},
    {firstname: 'Samer', relationship: 'Son', id: '2'},
    {firstname: 'Saeed', relationship: 'Son', id: '3'},
  ];
  payments: any[] = [
    {amount: 15, duedate: new Date()},
    {amount: 25, duedate: new Date()},
    {amount: 5, duedate: new Date()},
  ];

  constructor(private patientService: PatinetSeviceService,
              public route: ActivatedRoute) {
  }

  ngOnInit() {
    // this will return patient by id
    const id = this.route.params.subscribe((params: Params) => {
      this.id = +params[`id`];
      this.patient = this.patientService.patients[this.id];
      /*      this.patient = new Patient('Ahmad', 'Jamal', 'Ahmad', 'Thabet',
        'ahmad.j.thabet@gmail.com', 'pp', new Date(),
        '0598223589', '0598223589', '8908', '90909090', 'trust',
        'male', 'Ramallah', 'Ramallah', 'Ramallah', '96682828282');*/
    });
  }

  onDateChanged() {
    // do query when date changed
    // TODO: implement this
  }
}
