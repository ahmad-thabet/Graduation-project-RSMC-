import {Component, OnInit} from '@angular/core';
import {Paymentdetails} from '../../models/paymentdetails.model';
import {PaymentServiceService} from '../../service/payment-service.service';

@Component({
  selector: 'app-admin-payment',
  templateUrl: './admin-payment.component.html',
  styleUrls: ['./admin-payment.component.css']
})
export class AdminPaymentComponent implements OnInit {


  details: Paymentdetails[] = [];
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
