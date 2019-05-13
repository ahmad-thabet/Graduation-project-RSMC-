import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-patient-payment-list',
  templateUrl: './patient-payment-list.component.html',
  styleUrls: ['./patient-payment-list.component.css']
})
export class PatientPaymentListComponent implements OnInit {
  payments: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
