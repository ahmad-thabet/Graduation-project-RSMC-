import {Component, OnInit} from '@angular/core';
import {ReadFile} from '../../models/ReadFile';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
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
