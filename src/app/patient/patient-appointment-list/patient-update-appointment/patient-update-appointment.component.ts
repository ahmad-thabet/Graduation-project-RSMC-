import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patient-update-appointment',
  templateUrl: './patient-update-appointment.component.html',
  styleUrls: ['./patient-update-appointment.component.css']
})
export class PatientUpdateAppointmentComponent implements OnInit {
  title = 'Update Appointment';

  @Input() appointment;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

}
