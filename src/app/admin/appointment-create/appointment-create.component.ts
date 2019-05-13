import {Component, NgModule, OnInit} from '@angular/core';
import {ClinicDoctor} from '../../models/clinic-doctor.model';
import {Clinic} from '../../models/clinic.model';
import {Patient} from '../../models/patient.model';
import {Employee} from '../../models/employee.model';
import {ClinicServiceService} from '../../service/clinic-service.service';
import {AppoinmentServiceService} from '../../service/appoinment-service.service';
import {Appointment} from '../../models/appointment.model';
import {PatinetSeviceService} from '../../service/patinet-sevice.service';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})

export class AppointmentCreateComponent implements OnInit {
  selectedClinic: number;
  selectedDoctor: any;
  selectedFromDate = new Date();
  selectedToDate = new Date();
  selectedAppointment: any;
  selectedPatient: any;

  appointments: Appointment[];
  appointment = new Appointment(0, 0, 0, 0, 0, new Date(), new Date());
  doctors: ClinicDoctor[];
  clinics: Clinic[];
  error = '';
  success = '';
  patients: Patient[];
  date5: Date;

  minDate = new Date();
  maxDate = new Date();
  doctorsID: Employee[];
  invalidDates: Array<Date> = [];
  validDates: Array<Date> = [];

  /*  value: any;
    public selectedDate: Date = displayDate;
    public events: SchedulerEvent[] = [];*/

  constructor(private clinicService: ClinicServiceService,
              private appointmentService: AppoinmentServiceService,
              private  patinetservice: PatinetSeviceService) {
  }

  ngOnInit() {
    // load stuff here
    this.filterDates();
    this.loadalldoctors();
    this.loadAppointmant();
    this.loadClinics();
    this.loadpatient();

    this.maxDate.setFullYear(this.minDate.getFullYear(), this.minDate.getMonth() + 11, this.minDate.getDay());
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


  clinicSelected() {
    //this.get_doctors();
    this.loaddoctors();
  }

  setTimeSlots() {
    // get valid dates of doctor, put it in this.validDates
    // load time slots in all apointment
  }

  private loadClinics() {
    this.clinicService.get_clinic().subscribe(
      (res: Clinic[]) => {
        this.clinics = res;
        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  private loadalldoctors() {
    this.clinicService.get_clinic_doctors().subscribe(
      (res: ClinicDoctor[]) => {
        this.doctors = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  private loadAppointmant() {
    this.appointmentService.get_appointment().subscribe(
      (res: Appointment[]) => {
        this.appointments = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  add_appointment(f) {
    this.appointmentService.add_appointment(this.appointment)
      .subscribe(
        (res: Appointment[]) => {
          // Update the list of cars
          this.appointments = res;
          // Inform the user
          console.log(this.appointments);
          this.success = 'Created successfully';
          console.log(this.success);
          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );
  }

  private loadpatient() {
    this.patinetservice.get_patient().subscribe(
      (res: Patient[]) => {
        this.patients = res;
        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  get_doctors() {
    this.clinicService.get_byID(this.selectedClinic)
      .subscribe(
        (res: Employee[]) => {
          // Update the list of cars
          console.log(this.selectedClinic);
          this.doctorsID = res;
          // Inform the user
          console.log(this.doctorsID);
          this.success = 'Created successfully';
          console.log(this.success);
          // Reset the form
        },
        (err) => this.error = err
      );
  }

  private loaddoctors() {
    this.clinicService.getID(this.selectedClinic).subscribe(
      (res: Employee[]) => {
        this.doctorsID = res;
        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
