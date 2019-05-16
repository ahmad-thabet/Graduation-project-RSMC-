export class Patientpayment {
  public personalID: string;
  public balance: number;
  public lastpaymentdate: string;
  public lastpaydate: string;

  constructor(personalID: string, balance: number, lastpaymentdate: string, lastpaydate: string) {
    this.personalID = personalID;
    this.balance = balance;
    this.lastpaymentdate = lastpaymentdate;
    this.lastpaydate = lastpaydate;
  }
}
