export class Patient {
  public firstname: string;
  public secondname: string;
  public thirdname: string;
  public lastname: string;
  public email: string;
  public password: string;
  public dateofbirth: Date;
  public phonenumber: string;
  public mobilenumber: string;
  public insuranceID: number;
  public subinsuranceID: number;
  public insurancecompany: string;
  public gender: string;
  public address: string;
  public city: string;
  public quantum: string;
  public personalID: string;

  constructor(
    firstname: string,
    secondname: string,
    thirdname: string,
    lastname: string,
    email: string,
    password: string,
    dateofbirth: Date,
    phonenumber: string,
    mobilenumber: string,
    insuranceID: number,
    subinsuranceID: number,
    insurancecompany: string,
    gender: string,
    address: string,
    city: string,
    quantum: string,
    personalID: string) {

    this.firstname = firstname;
    this.secondname = secondname;
    this.thirdname = thirdname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.dateofbirth = dateofbirth;
    this.phonenumber = phonenumber;
    this.mobilenumber = mobilenumber;
    this.insuranceID = insuranceID;
    this.subinsuranceID = subinsuranceID;
    this.insurancecompany = insurancecompany;
    this.gender = gender;
    this.address = address;
    this.city = city;
    this.quantum = quantum;
    this.personalID = personalID;
  }


}
