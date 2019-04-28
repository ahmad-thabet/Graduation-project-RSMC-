import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {City} from '../models/city.model';
import {Quantom} from '../models/quantom.model';
import {Patient} from '../models/patient.model';
import {Clinic} from '../models/clinic.model';

@Injectable({
  providedIn: 'root'
})
export class PatinetSeviceService {
  cities: City[];
  quantom: Quantom[];
  patients: Patient[];
  clinics: Clinic[];

  // url = 'http://localhost:8080/api';

   url = 'http://localhost/api';

  constructor(private  http: HttpClient) {
  }

  getcity(): Observable<City[]> {
    return this.http.get(`${this.url}/general/get-city`, {responseType: 'json'}).pipe(
      map((res) => {
        this.cities = res[`data`];
        return this.cities;
      }),
      catchError(this.handleError));
  }

  getquantom(): Observable<Quantom[]> {
    return this.http.get(`${this.url}/general/get-quantom`, {responseType: 'json'}).pipe(
      map((res) => {
        this.quantom = res[`data`];
        console.log(this.quantom);
        return this.quantom;
      }),
      catchError(this.handleError));
  }

  add_patient(patient: Patient): Observable<Patient[]> {
    return this.http.post(`${this.url}/patient/add/add-patient`, {data: patient}, {responseType: 'text'})
      .pipe(map((res) => {
          this.patients = res[`data`];
          console.log('ok');
          console.log(res[`data`]);
          return this.patients;
        }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

  get_patient(): Observable<Patient[]> {
    return this.http.get(`${this.url}/patient/get/get-patient`, {responseType: 'json'}).pipe(
      map((res) => {
        this.patients = res[`data`];
        console.log(this.patients);
        return this.patients;
      }),
      catchError(this.handleError));
  }

  // TODO: implement this function
  getPatientById(id: number) {
    return undefined;
  }

  // TODO: implement this function
  UpdatePatient(patient: Patient) {
    return undefined;
  }

  // TODO: implement this function
  add_clinic(clinic: string) {
    return undefined;
  }

  // TODO: implement this function
  get_clinics() {
    return undefined;
  }

  // TODO: implement this function
  add_doctorClinic(clinic: Clinic) {
    return undefined;
  }
}
