import {Component, OnInit} from '@angular/core';
import {ClinicDoctor} from '../../models/clinic-doctor.model';
import {Clinic} from '../../models/clinic.model';
import {Patient} from '../../models/patient.model';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent implements OnInit {
  selectedClinic: any;
  selectedDoctor: any;
  selectedDate: any;
  selectedAppointment: any;
  selectedPatient: any;

  allDoctors: ClinicDoctor[] = [];
  allClinics: Clinic[] = [];
  allPatients: Patient[] = [];
  allAppointments: any[] = [new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()];


  /*  value: any;
    public selectedDate: Date = displayDate;
    public events: SchedulerEvent[] = [];*/

  constructor() {
  }

  ngOnInit() {
  }

  getCurrentModel() {
    return JSON.stringify(this.selectedClinic + '-' + this.selectedDoctor + '-'
      + this.selectedDate + '-' + this.selectedAppointment);
  }

  add_appointment(f) {
    console.log(f);
  }

}
