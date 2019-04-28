import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {Insurance} from '../models/insurance.model';
import {Subinsurance} from '../models/subinsurance.model';

@Injectable({
  providedIn: 'root'
})
export class InsuranceServiceService {

  constructor(private  http: HttpClient) {
  }

  // insurance = new Insurance(0, ' ');
  // subinsurance = new Subinsurance(0, 0, 0, '');
  insurances: Insurance[];
  subinsurances: Subinsurance[];
  success = '';
  error = '';
  url = 'http://localhost/api';

  getinsurance(): Observable<Insurance[]> {
    return this.http.get(`${this.url}/insurance/get/get-insurance`, {responseType: 'json'}).pipe(
      map((res) => {
        this.insurances = res[`data`];
        return this.insurances;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

  getsubinsurance(): Observable<Subinsurance[]> {
    return this.http.get(`${this.url}/insurance/get/get-subinsurance`, {responseType: 'json'}).pipe(
      map((res) => {
        this.subinsurances = res[`data`];
        return this.subinsurances;
      }),
      catchError(this.handleError));
  }
  add_insurance(insurance: Insurance): Observable<Insurance[]> {
    return this.http.post(`${this.url}/insurance/add/add-insurance`, {data: insurance}, {responseType: 'text'})
      .pipe(map((res) => {
          this.insurances = res[`data`];
          console.log('ok');
          console.log(res[`data`]);
          return this.insurances;
        }),
        catchError(this.handleError));
  }

  add_subinsurance(subinsurance: Subinsurance): Observable<Subinsurance[]> {
    return this.http.post(`${this.url}/insurance/add/add-subinsurance`, {data: subinsurance}, {responseType: 'text'})
      .pipe(map((res) => {
          this.subinsurances = res[`data`];
          console.log('ok');
          console.log(res[`data`]);
          return this.subinsurances;
        }),
        catchError(this.handleError));
  }

}
