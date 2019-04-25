import {Time} from '@angular/common';

export class Exception {
  public clinicID: number;
  public empID: number;
  public edate: Date;
  public start: Time;
  public end: Time;
  public note: string;

  constructor(clinicID: number,
              empID: number,
              edate: Date,
              start: Time,
              end: Time,
              note: string) {
    this.clinicID = clinicID;
    this.empID = empID;
    this.edate = edate;
    this.start = start;
    this.end = end;
    this.note = note;

  }

}
