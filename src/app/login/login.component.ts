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

}

interface User {
  id: string;
  password: string;
  type: string;
}
