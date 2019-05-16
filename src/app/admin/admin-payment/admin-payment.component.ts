import {Component, OnInit} from '@angular/core';
import {Paymentdetails} from '../../models/paymentdetails.model';
import {PaymentServiceService} from '../../service/payment-service.service';

@Component({
  selector: 'app-admin-payment',
  templateUrl: './admin-payment.component.html',
  styleUrls: ['./admin-payment.component.css']
})
export class AdminPaymentComponent implements OnInit {


  details: Paymentdetails[] = [
    new Paymentdetails('401110796', '1', '100', '01-01-2019', 'Cash', '1'),
    new Paymentdetails('401110796', '2', '10', '02-02-2019', 'Cash', '2'),
    new Paymentdetails('410149348', '4', '70', '03-03-2019', 'Cash', '3'),
    new Paymentdetails('401110796', '2', '50', '04-04-2019', 'Cash', '4'),
    new Paymentdetails('410149348', '2', '100', '05-05-2019', 'Cash', '5'),
    new Paymentdetails('850038746', '1', '110', '06-06-2019', 'Cash', '6'),
    new Paymentdetails('850038746', '1', '200', '07-07-2019', 'Cash', '7'),
  ];
  error = '';

  constructor(private paymentService: PaymentServiceService) {
  }

  ngOnInit() {
    this.loaddetails();
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
}
