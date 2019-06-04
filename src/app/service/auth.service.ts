import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /*For mac*/
  // url = 'http://localhost:8080/api';

  /*For Windows*/
  url = 'http://localhost/api';

  token: any;
  loggedIn = false;
  user: LoggedUser;

  patient: User[] = [];
  doctor: User[] = [];
  admin: User[] = [];
  reception: User[] = [];

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

    if (this.patient.length !== 0 && user.type === '1') {
      // patient login
      this.loggedIn = true;
      this.router.navigate(['patient']);
      this.showSuccessAlarm();
    } else if (this.reception.length !== 0 && user.type === '2') {
      // reception login
      this.loggedIn = true;
      this.router.navigate(['reception']);
      this.showSuccessAlarm();
    } else if (this.doctor.length !== 0 && user.type === '3') {
      // doctor login
      this.loggedIn = true;
      this.router.navigate(['doctor']);
      this.showSuccessAlarm();
    } else if (this.admin.length !== 0 && user.type === '4') {
      // admin login
      this.loggedIn = true;
      this.router.navigate(['admin']);
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

    this.patient = [];
    this.doctor = [];
    this.admin = [];
    this.reception = [];

    this.router.navigate(['../']);
    this.messageService.add({
      severity: 'info',
      summary: 'Logged Out',
      detail: 'See you soon :)'
    });

    sessionStorage.clear();
    localStorage.clear();

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

  patient_login(patientID: string, password: string): Observable<User[]> {
    return this.http.get(`${this.url}/login/patient-login?patientID=` + patientID + `&password=` + password,
      {responseType: 'json'}).pipe(
      map((res) => {
        this.patient = res[`data`];
        console.log(this.patient);
        return this.patient;
      }),
      catchError(this.handleError));
  }

  doctor_login(username: string, password: string): Observable<User[]> {
    return this.http.get(`${this.url}/login/doctor-login?username=` + username + `&password=` + password,
      {responseType: 'json'}).pipe(
      map((res) => {
        this.doctor = res[`data`];
        console.log(this.doctor);
        return this.doctor;
      }),
      catchError(this.handleError));
  }

  admin_login(username: string, password: string): Observable<User[]> {
    return this.http.get(`${this.url}/login/admin-login?username=` + username + `&password=` + password,
      {responseType: 'json'}).pipe(
      map((res) => {
        this.admin = res[`data`];
        console.log(this.admin);
        return this.admin;
      }),
      catchError(this.handleError));
  }

  reception_login(username: string, password: string): Observable<User[]> {
    return this.http.get(`${this.url}/login/reception-login?username=` + username + `&password=` + password,
      {responseType: 'json'}).pipe(
      map((res) => {
        this.reception = res[`data`];
        console.log(this.reception);
        return this.reception;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
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


