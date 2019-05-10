import {Component, NgModule, OnInit} from '@angular/core';
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


  date5: Date;
  minDate = new Date();
  invalidDates: Array<Date> = [];
  validDates: Array<Date> = [];

  /*  value: any;
    public selectedDate: Date = displayDate;
    public events: SchedulerEvent[] = [];*/

  constructor() {
  }

  ngOnInit() {
    // load stuff here
    this.filterDates();
  }

  filterDates() {

    let invalidDates = [];
    let validDates = [];

    //////// fot testing
    // generate random valid dates.
    // validDates = this.validDates;
    validDates = [
      new Date(),
      new Date(),
      new Date(),
      new Date()
    ];
    validDates[0].setDate(validDates[0].getDate() + 10);
    validDates[1].setDate(validDates[1].getDate() + 15);
    validDates[2].setDate(validDates[2].getDate() + 16);
    validDates[3].setDate(validDates[3].getDate() + 17);
    /////////

    // set random start and end dates.
    const start = new Date();
    const end = new Date();
    end.setFullYear(start.getFullYear(), start.getMonth() + 11, start.getDay());

    // move over [start ---> end] and fill all dates as invalid.
    let tempDate = new Date(start.getTime());
    while (tempDate.getTime() < end.getTime()) {
      invalidDates.push(tempDate);
      tempDate = new Date(tempDate.getTime());
      tempDate.setDate(tempDate.getDate() + 1);
    }

    // remove the valid dates from the invalid ones..
    invalidDates = invalidDates.filter(
      (invalidDate) =>
        !validDates.find(validDate => Math.abs(validDate.getTime() - invalidDate.getTime()) < 5)
    );

    // invalidDates.forEach(date => console.log(date.toString()));
    this.invalidDates = invalidDates;
  }

  getCurrentModel() {
    return JSON.stringify(this.date5 + '--' + this.selectedClinic + '-' + this.selectedDoctor + '-'
      + this.selectedAppointment + '-' + this.selectedPatient + '-' + this.selectedFromDate + '-' + this.selectedToDate);
  }

  add_appointment(f) {
    console.log(f);
  }

  clinicSelected() {
    // get doctors of selected clinic here, make it void
    return true;
  }

  setTimeSlots() {
    // get valid dates of doctor, put it in this.validDates
    // load time slots in all apointment
  }
}
