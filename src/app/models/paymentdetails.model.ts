export class Paymentdetails {
  public personalID: string;
  public empID: string;
  public amount: string;
  public senddate: string;
  public paymenttype: string;
  public paymnetID: string;

  constructor(personalID: string, empID: string, amount: string, senddate: string, paymenttype: string, paymnetID: string) {
    this.personalID = personalID;
    this.empID = empID;
    this.amount = amount;
    this.senddate = senddate;
    this.paymenttype = paymenttype;
    this.paymnetID = paymnetID;
  }
}
