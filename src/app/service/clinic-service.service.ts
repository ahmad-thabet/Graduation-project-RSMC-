import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {Clinic} from '../models/clinic.model';

@Injectable({
  providedIn: 'root'
})
export class ClinicServiceService {

  constructor(private  http: HttpClient) {
  }

  // url = 'http://localhost:8080/api';
  url = 'http://localhost/api';
  clinics: Clinic[];

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

  get_clinic(): Observable<Clinic[]> {
    return this.http.get(`${this.url}/get-clinic`, {responseType: 'json'}).pipe(
      map((res) => {
        this.clinics = res[`data`];
        // console.log(this.clinics);
        return this.clinics;
      }),
      catchError(this.handleError));
  }

  add_clinic(clinic: Clinic): Observable<Clinic[]> {
    return this.http.post(`${this.url}/add-clinic`, {data: clinic}, {responseType: 'text'})
      .pipe(map((res) => {
          this.clinics = res[`data`];
          console.log('ok');
          console.log(res[`data`]);
          return this.clinics;
        }),
        catchError(this.handleError));
  }
}
