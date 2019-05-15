import {Component, OnInit} from '@angular/core';
import {PatinetSeviceService} from '../../service/patinet-sevice.service';
import {Patient} from '../../models/patient.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  patientID = '1';

  patient = new Patient('', '', '', '', '', '',
    new Date(), '', '', '', '', 0,
    '', '', '', '', '', '', '', '');

  patients: Patient[] = [];

  constructor(private patientService: PatinetSeviceService) {
  }

  ngOnInit() {
    this.loadAllPatients();
  }

  private loadAllPatients() {
    return this.patientService.get_patient().subscribe(
      (res: Patient[]) => {
        this.patients = res;
        this.loadPatient();
      },
      (err) => {
        console.log(err);
      }
    );
  }


  private loadPatient() {
    for (const i of this.patients) {
      console.log(this.patientID);
      if (i.personalID === this.patientID.toString()) {
        console.log(i);
        this.patient = i;
      }
    }
  }
}


/*
import {Component, OnInit} from '@angular/core';
import {ReadFile} from '../../models/ReadFile';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  src: string;
  disable = true;
  myFormGroup = new FormGroup({
    name: new FormControl(),
    secondName: new FormControl(),
    thirdName: new FormControl(),
    lastName: new FormControl(),
    gender: new FormControl(),
    address: new FormControl(),
    personalID: new FormControl(),
    email: new FormControl(),
    dateofbirth: new FormControl(),
    phonenumber: new FormControl(),
    insuranceID: new FormControl(),
    insurancecompany: new FormControl()
  });
  user = {
    firstname: 'john',
    secondname: 'snow',
    thirdname: 'james',
    lastname: 'mark',
    email: 'jsnow@gmail.com',
    dateofbirth: new Date(),
    phonenumber: '+123456789',
    mobilenumber: '+91223332',
    insuranceID: '1232131231',
    subinsuranceID: 'As122121',
    insurancecompany: 'Trust',
    gender: 'male',
    address: 'batn al hawa, ramallah',
    personalID: '120',
  };

  constructor() {
  }

  makeEditable() {
    this.disable = false;
  }

  ngOnInit() {
    if (localStorage.getItem('ImageUrl') != null) {
      this.src = localStorage.getItem('ImageUrl');
    } else {
      this.src = './assets/imgs/user4.jpg';
    }
  }

  onFilePicked(file: ReadFile) {
    this.src = file.content;
    localStorage.setItem('ImageUrl', file.content);
  }

  getFullName() {
    return this.user.firstname + ' ' + this.user.lastname;
  }

}
*/
