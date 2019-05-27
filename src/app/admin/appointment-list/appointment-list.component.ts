import {Component, OnInit} from '@angular/core';
import {displayDate} from '../schadule-generator/events-utc';
import {SchedulerEvent} from '@progress/kendo-angular-scheduler';
import {Clinic} from '../../models/clinic.model';
import {ClinicDoctor} from '../../models/clinic-doctor.model';
import {ClinicServiceService} from '../../service/clinic-service.service';
import {AppoinmentServiceService} from '../../service/appoinment-service.service';
import {PatinetSeviceService} from '../../service/patinet-sevice.service';
import {EmployeeServiceService} from '../../service/employee-service.service';
import {ScheduleServiceService} from '../../service/schedule-service.service';
import {MessageService} from 'primeng/api';
import {Employee} from '../../models/employee.model';
import {Appointment} from '../../models/appointment.model';
import {Patient} from '../../models/patient.model';
import {Schadule} from '../../models/schedule.model';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  error = '';
  success = '';

  fromdate = new Date();
  todate = new Date();

  selectedClinic: any;
  selectedDoctor: any;

  appointments: Appointment[] = [];
  appointment = new Appointment(0, 0, 0, 0, 0, new Date(), new Date());

  doctors: ClinicDoctor[];
  doctorss: ClinicDoctor[];

  clinics: Clinic[];

  doctorsID: Employee[] = [];
  doctorsIDs: Employee[] = [];

  doctorsSchedule: Schadule[] = [];
  doctorsSchedules: Schadule[] = [];

  constructor(private clinicService: ClinicServiceService,
              private appointmentService: AppoinmentServiceService,
              private patinetservice: PatinetSeviceService,
              private employeeService: EmployeeServiceService,
              private scheduleService: ScheduleServiceService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.loaddoctors();
    this.loadalldoctors();
    this.loadAppointmant();
    this.loadClinics();
  }

  clinicSelected(id: any) {
    this.selectedClinic = id;
    this.doctorsIDs.splice(0, this.doctorsIDs.length);
    this.doctorss = this.doctors.filter(x => x.clinicID === id);
    for (const x of this.doctorss) {
      const idd = x.empID;
      const emp = this.doctorsID.findIndex(i => i.empID === (idd + ''));
      if (emp !== -1) {
        this.doctorsIDs.push(this.doctorsID[emp]);
      }
    }
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
        console.log('all docs ' + this.doctors.toString());
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


  private loaddoctors() {
    this.employeeService.get_employee().subscribe(
      (res: Employee[]) => {
        this.doctorsID = res;
        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  doctorSelected(value: any) {
    this.selectedDoctor = value;
    console.log(this.doctorsSchedules);
    this.doctorsSchedules.splice(0, this.doctorsSchedules.length);
    this.doctorsSchedules = this.doctorsSchedule.filter(x =>
      (x.clinicID.toString() === this.selectedClinic) && (x.empID.toString() === this.selectedDoctor));
    console.log(this.doctorsSchedules);
  }

  getCurrentModel() {
    return JSON.stringify(this.selectedDoctor + ',' + this.selectedClinic);
  }

  dateChanged() {
  }

  checkin(appID: number) {
    // make this do check in
    const i = this.appointments.findIndex(x => x.appID === appID);
    this.appointments[i].checkin = 1;

    console.log(this.appointments);
    this.messageService.add({
      severity: 'success',
      summary: 'Checked IN',
      detail: appID + ''
    });
  }
}

