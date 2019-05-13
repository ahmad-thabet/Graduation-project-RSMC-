import {Data} from '@angular/router';

export class Schadule {
  public scID: number;
  public clinicID: number;
  public employeeID: number;
  public starttime: string;
  public endtime: string;
  public slot: number;
  public startdate: Data;
  public enddate: Data;
  public sat: number;
  public sun: number;
  public mon: number;
  public tue: number;
  public wen: number;
  public thu: number;
  public fri: number;

  constructor(scID: number, clinicID: number,
              employeeID: number,
              starttime: string,
              endtime: string,
              slot: number,
              startdate: Data,
              enddate: Data,
              sat: number,
              sun: number,
              mon: number,
              tue: number,
              wen: number,
              thu: number,
              fri: number) {
    this.scID = scID;
    this.clinicID = clinicID;
    this.employeeID = employeeID;
    this.starttime = starttime;
    this.endtime = endtime;
    this.slot = slot;
    this.startdate = startdate;
    this.enddate = enddate;
    this.sat = sat;
    this.sun = sun;
    this.mon = mon;
    this.tue = tue;
    this.wen = wen;
    this.thu = thu;
    this.fri = fri;
  }
}
