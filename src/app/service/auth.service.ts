import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /*For mac*/
  url = 'http://localhost:8080/api';

  /*For Windows*/
  // url = 'http://localhost/api';

  token: any;
  loggedIn = false;
  user: LoggedUser;

  constructor(private http: HttpClient,
              private router: Router,
              private messageService: MessageService) {
  }

  login(user: User) {
    console.log('this from ts: ' + user.id + '-' + user.password + '-' + user.type);

    this.user = {
      id: user.id,
      type: user.type
    };

    /*TODO: make API request here*/

    if (true && user.type === '1') {
      // patient login
      this.loggedIn = true;
      this.router.navigate(['/patient']);
      this.showSuccessAlarm();
    } else if (true && user.type === '2') {
      // reception login
      this.loggedIn = true;
      this.router.navigate(['/reception']);
      this.showSuccessAlarm();
    } else if (true && user.type === '3') {
      // doctor login
      this.loggedIn = true;
      this.router.navigate(['/doctor']);
      this.showSuccessAlarm();
    } else if (true && user.type === '4') {
      // admin login
      this.loggedIn = true;
      this.router.navigate(['/admin']);
      this.showSuccessAlarm();
    } else {
      this.loggedIn = false;
      this.user = {id: '', type: ''};
      this.showFailAlarm();
    }

  }

  isAuth() {
    return this.loggedIn;
  }

  getUserId() {
    return this.user.id;
  }

  getUserType() {
    return this.user.type;
  }

  logout() {
    this.loggedIn = false;
    this.user = {id: '', type: ''};

    this.router.navigate(['login']);
    this.messageService.add({
      severity: 'info',
      summary: 'Logged Out',
      detail: 'See you soon :)'
    });

  }

  showSuccessAlarm() {
    this.messageService.add({
      severity: 'success',
      summary: 'Logged In',
      detail: 'Successful'
    });
  }

  showFailAlarm() {
    this.messageService.add({
      severity: 'error',
      summary: 'Incorrect!',
      detail: 'Please check again'
    });
  }

}

interface User {
  id: string;
  password: string;
  type: string;
}

interface LoggedUser {
  id: string;
  type: string;
}


