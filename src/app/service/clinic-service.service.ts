import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {Clinic} from '../models/clinic.model';
import {Employee} from '../models/employee.model';
import {ClinicDoctor} from '../models/clinic-doctor.model';

@Injectable({
  providedIn: 'root'
})
export class ClinicServiceService {

  constructor(private  http: HttpClient) {
  }

  /*For mac*/
  // url = 'http://localhost:8080/api';

  /*For Windows*/
  url = 'http://localhost/api';
clinocdoctors: ClinicDoctor[] ;
  clinics: Clinic[];
doctors: Employee[];
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

  get_clinic(): Observable<Clinic[]> {
    return this.http.get(`${this.url}/clinic/get/get-clinic`, {responseType: 'json'}).pipe(
      map((res) => {
        this.clinics = res[`data`];
        // console.log(this.clinics);
        return this.clinics;
      }),
      catchError(this.handleError));
  }

  add_clinic(clinic: Clinic): Observable<Clinic[]> {
    return this.http.post(`${this.url}/clinic/add/add-clinic`, {data: clinic}, {responseType: 'text'})
      .pipe(map((res) => {
          this.clinics = res[`data`];
          console.log('ok');
          console.log(res[`data`]);
          return this.clinics;
        }),
        catchError(this.handleError));
  }

  add_doctorClinic(doctor: ClinicDoctor) {
    return this.http.post(`${this.url}/doctor/add/add-doctor`, {data: doctor}, {responseType: 'text'})
      .pipe(map((res) => {
          this.clinocdoctors = res[`data`];
          console.log('ok');
          console.log(res[`data`]);
          return this.clinocdoctors;
        }),
        catchError(this.handleError));
  }
  getdoctors(): Observable<Employee[]> {
    return this.http.get(`${this.url}/doctor/get/get-doctorsp`, {responseType: 'json'}).pipe(
      map((res) => {
        this.doctors = res[`data`];
        // console.log(this.clinics);
        return this.doctors;
      }),
      catchError(this.handleError));
  }
  get_clinic_doctors(): Observable<ClinicDoctor[]> {
    return this.http.get(`${this.url}/doctor/get/get-doctor`, {responseType: 'json'}).pipe(
      map((res) => {
        this.clinocdoctors = res[`data`];
        // console.log(this.clinics);
        return this.clinocdoctors;
      }),
      catchError(this.handleError));
  }

}
