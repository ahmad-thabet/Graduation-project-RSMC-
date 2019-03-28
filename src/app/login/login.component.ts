import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  loginUser(form: NgForm) {
    const userId = form.value.userId;
    const userPassword = form.value.userPassword;
    const userType = form.value.userType;
    this.authService.isAuth(userId, userPassword, userType);

    // make sure the user is authenticated
    this.authService.isAuth(userId, userPassword, userType);
  }

}
