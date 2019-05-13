export interface IClinic {
  name?: string;
  id?: number;
}

export class Clinic {
  public clinicname: string;
  public clinicID: number;

  constructor(clinicname: string,
              clinicID: number) {
    this.clinicname = clinicname;
    this.clinicID = clinicID;
  }

}
