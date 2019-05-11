import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {Appointment} from '../models/appointment.model';
@Injectable({
  providedIn: 'root'
})
export class AppoinmentServiceService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost/api';
appintments: Appointment[];
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
    return this.http.post(`${this.url}/admin/add/create-schedule`, {data: appointment}, {responseType: 'text'})
      .pipe(map((res) => {
          this.appintments = res[`data`];
          console.log('ok');
          console.log(res[`data`]);
          return this.appintments;
        }),
        catchError(this.handleError));
  }
}
