import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  patient: User[];
  admin: User[];
  doctor: User[];
  reception: User[];
  error = '';
  sucsess = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  loginUser(form: NgForm) {
    this.user = {
      id: form.value.userId,
      password: form.value.userPassword,
      type: form.value.userType
    };
    // print data to console
    console.log('this from ts: ' + this.user.id + '-' + this.user.password + '-' + this.user.type);
    this.authService.login(this.user);


  }

  private patient_login() {
    this.authService.patient_login(this.user.id, this.user.password).subscribe(
      (res: User[]) => {
        this.patient = res;
        console.log(this.patient);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  private doctor_login() {
    this.authService.doctor_login(this.user.id, this.user.password).subscribe(
      (res: User[]) => {
        this.doctor = res;
        console.log(this.doctor);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  private admin_login() {
    this.authService.admin_login(this.user.id, this.user.password).subscribe(
      (res: User[]) => {
        this.admin = res;
        console.log(this.admin);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  private reception_login() {
    this.authService.reception_login(this.user.id, this.user.password).subscribe(
      (res: User[]) => {
        this.reception = res;
        console.log(this.reception);
      },
      (err) => {
        this.error = err;
      }
    );
  }
}

interface User {
  id: string;
  password: string;
  type: string;
}
