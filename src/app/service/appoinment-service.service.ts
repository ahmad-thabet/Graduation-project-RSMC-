import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {Appointment} from '../models/appointment.model';
import {AppComponent} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentServiceService {
  appintments: Appointment[];
  slots: Appointment[];
  doctorAppointment: Appointment[];
  url = this.appComponent.getURL();

  constructor(private appComponent: AppComponent,
              private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

  get_appointment(): Observable<Appointment[]> {
    return this.http.get(`${this.url}/appointment/get/get-appointment`, {responseType: 'json'}).pipe(
      map((res) => {
        this.appintments = res[`data`];
        // console.log(this.clinics);
        return this.appintments;
      }),
      catchError(this.handleError));
  }

  add_appointment(appointment: Appointment): Observable<Appointment[]> {
    return this.http.post(`${this.url}/appointment/add/add-appointment`, {data: appointment}, {responseType: 'text'})
      .pipe(map((res) => {
          this.appintments = res[`data`];
          console.log('ok');
          console.log(res[`data`]);
          return this.appintments;
        }),
        catchError(this.handleError));
  }

  getslots(empID: number, clinicID: number): Observable<Appointment[]> {
    return this.http.get(`${this.url}/appointment/get/get-slots.php?clinicID=` + clinicID + `&empID=` + empID,
      {responseType: 'json'}).pipe(
      map((res) => {
        this.slots = res[`data`];
        // console.log(this.clinics);
        return this.slots;
      }),
      catchError(this.handleError));
  }

  update_checkin(appointment: Appointment): Observable<Appointment[]> {
    return this.http.post(`${this.url}/appointment/add/checkin`, {data: appointment}, {responseType: 'text'})
      .pipe(map((res) => {
          this.appintments = res[`data`];
          console.log('ok');
          console.log(res[`data`]);
          return this.appintments;
        }),
        catchError(this.handleError));
  }

  load_doctor_appointment(empID: number) {
    return this.http.get(`${this.url}appointment/get/get-checkin.php?empID` + empID,
      {responseType: 'json'}).pipe(
      map((res) => {
        this.doctorAppointment = res[`data`];
        // console.log(this.clinics);
        return this.doctorAppointment;
      }),
      catchError(this.handleError));
  }
}
