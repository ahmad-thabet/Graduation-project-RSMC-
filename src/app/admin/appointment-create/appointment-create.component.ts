import {Component, OnInit} from '@angular/core';
import {ClinicDoctor} from '../../models/clinic-doctor.model';
import {Clinic} from '../../models/clinic.model';
import {Patient} from '../../models/patient.model';
import {Employee} from '../../models/employee.model';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent implements OnInit {
  selectedClinic: any;
  selectedDoctor: any;
  selectedFromDate = new Date();
  selectedToDate = new Date();
  selectedAppointment: any;
  selectedPatient: any;

  allDoctors: Employee[] = [];
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
    // load stuff here
  }

  getCurrentModel() {
    return JSON.stringify(this.selectedClinic + '-' + this.selectedDoctor + '-'
      + this.selectedAppointment + '-' + this.selectedPatient + '-' + this.selectedFromDate + '-' + this.selectedToDate);
  }

  add_appointment(f) {
    console.log(f);
  }

  clinicSelected() {
    // get doctors of selected clinic here, make it void
    return true;
  }
}
