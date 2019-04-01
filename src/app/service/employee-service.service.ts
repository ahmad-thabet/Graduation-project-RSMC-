import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {Employee} from '../models/employee.model';
import {Job} from '../models/job.model';
import {Specialist} from '../models/specialist.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  employees: Employee[];
  url = 'http://localhost/api';
  jobs: Job[];
  sp: Specialist[];

  constructor(private  http: HttpClient) {
  }

  add_employee(employee: Employee): Observable<Employee[]> {
    return this.http.post(`${this.url}/add-employee`, {data: employee}, {responseType: 'text'})
      .pipe(map((res) => {
          this.employees = res[`data`];
          console.log('ok');
          console.log(res[`data`]);
          return this.employees;
        }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

  get_employee(): Observable<Employee[]> {
    return this.http.get(`${this.url}/get-employee`, {responseType: 'json'}).pipe(
      map((res) => {
        this.employees = res[`data`];
        console.log(this.employees);
        return this.employees;
      }),
      catchError(this.handleError));
  }

  getjob(): Observable<Job[]> {
    return this.http.get(`${this.url}/get-job`, {responseType: 'json'}).pipe(
      map((res) => {
        this.jobs = res[`data`];
        return this.jobs;
      }),
      catchError(this.handleError));
  }

  getsp(): Observable<Specialist[]> {
    return this.http.get(`${this.url}/get-sp`, {responseType: 'json'}).pipe(
      map((res) => {
        this.sp = res[`data`];
        return this.sp;
      }),
      catchError(this.handleError));
  }
}
