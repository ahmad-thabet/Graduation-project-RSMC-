export class Schadule {
  public scID: number;
  public clinicID: number;
  public employeeID: number;
  public starttime: string;
  public endtime: string;
  public slot: number;
  public dayofweek: string;

  constructor(scID: number,
              clinicID: number,
              employeeID: number,
              starttime: string,
              endtime: string,
              slot: number,
              dayofweek: string
  ) {
    this.scID = scID;
    this.clinicID = clinicID;
    this.employeeID = employeeID;
    this.starttime = starttime;
    this.endtime = endtime;
    this.slot = slot;
    this.dayofweek = dayofweek;
  }
}
