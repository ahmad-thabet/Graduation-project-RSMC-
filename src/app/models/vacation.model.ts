import {Time} from '@angular/common';

export class Vacation {
  public clinicID: number;
  public empID: number;
  public vdate: Date;
  public start: Time;
  public end: Time;
  public note: string;

  constructor(clinicID: number,
              empID: number,
              vdate: Date,
              start: Time,
              end: Time,
              note: string) {
    this.clinicID = clinicID;
    this.empID = empID;
    this.vdate = vdate;
    this.start = start;
    this.end = end;
    this.note = note;

  }

}
