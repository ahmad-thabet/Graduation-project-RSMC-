import {Component, OnInit} from '@angular/core';
import {Paymentdetails} from '../../models/paymentdetails.model';
import {PaymentServiceService} from '../../service/payment-service.service';
import {Patient} from '../../models/patient.model';
import {PatinetSeviceService} from '../../service/patinet-sevice.service';

@Component({
  selector: 'app-admin-payment',
  templateUrl: './admin-payment.component.html',
  styleUrls: ['./admin-payment.component.css']
})
export class AdminPaymentComponent implements OnInit {

  fromdate = new Date();
  todate = new Date();
  patient = '';

  details: Paymentdetails[] = [
    new Paymentdetails('401110796', '1', '100', '01-01-2019', 'Cash', '1'),
    new Paymentdetails('401110796', '2', '10', '02-02-2019', 'Cash', '2'),
    new Paymentdetails('410149348', '4', '70', '03-03-2019', 'Cash', '3'),
    new Paymentdetails('401110796', '2', '50', '04-04-2019', 'Cash', '4'),
    new Paymentdetails('410149348', '2', '100', '05-05-2019', 'Cash', '5'),
    new Paymentdetails('850038746', '1', '110', '06-06-2019', 'Cash', '6'),
    new Paymentdetails('850038746', '1', '200', '07-07-2019', 'Cash', '7'),
  ];
  allDetails = this.details;
  error = '';
  patients: Patient[] = [];

  constructor(private paymentService: PaymentServiceService,
              private patinetService: PatinetSeviceService) {
  }

  ngOnInit() {
    this.loaddetails();
    this.loadpatient();
  }

  private loaddetails() {
    this.paymentService.getpaymentdetails().subscribe(
      (res: Paymentdetails[]) => {
        this.details = res;
        console.log(this.details);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  dateChanged() {
    // this.details = this.allDetails.filter(x =>
    //   x.senddate === this.setDateFormat(this.fromdate) || x.senddate.toString() === this.setDateFormat(this.todate));
  }

  onSelectPatient(id: string) {
    this.details = this.allDetails.filter(x => x.personalID === id);
  }

  private loadpatient() {
    this.patinetService.get_patient().subscribe(
      (res: Patient[]) => {
        this.patients = res;
        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  getCurrentModel() {
    return JSON.stringify(this.patient);
  }

  setDateFormat(date5: Date) {
    let tmpdate = '';
    tmpdate += date5.getFullYear();
    console.log(date5.getFullYear());
    if (+date5.getUTCMonth() < 10) {
      tmpdate += '-0' + (+date5.getMonth() + 1);
    } else {
      tmpdate += '-' + (+date5.getMonth() + 1);
    }

    if (+date5.getUTCDate() < 10) {
      tmpdate += '-0' + date5.getDate();
    } else {
      tmpdate += '-' + date5.getDate();
    }
    return tmpdate;
  }

}
