import {Component, OnInit} from '@angular/core';
import {AppointmentPrice} from '../../models/appointmentprice.model';
import {Appointment} from '../../models/appointment.model';
import {ClinicDoctor} from '../../models/clinic-doctor.model';
import {Clinic} from '../../models/clinic.model';
import {Employee} from '../../models/employee.model';
import {Schadule} from '../../models/schedule.model';
import {ClinicServiceService} from '../../service/clinic-service.service';
import {AppoinmentServiceService} from '../../service/appoinment-service.service';
import {PatinetSeviceService} from '../../service/patinet-sevice.service';
import {EmployeeServiceService} from '../../service/employee-service.service';
import {ScheduleServiceService} from '../../service/schedule-service.service';
import {MessageService} from 'primeng/api';
import {PaymentServiceService} from '../../service/payment-service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../../service/auth.service';
import {PaymentPopupComponent} from '../../admin/appointment-list/payment-popup/payment-popup.component';
import {DoctorPatientHistoryComponent} from '../doctor-patient-history/doctor-patient-history.component';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.css']
})
export class DoctorScheduleComponent implements OnInit {

  doctorID = '';
  error = '';
  success = '';

  date = new Date();

  selectedClinic: any;
  selectedDoctor: any;
  appointments: Appointment[] = [];
  filteredAppointment: Appointment[] = [];

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
              private messageService: MessageService,
              private paymentService: PaymentServiceService,
              private modalService: NgbModal,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.loadDoctorId();
    this.loaddoctors();
    this.loadalldoctors();
    this.loadAppointmant();
    this.loadClinics();

    setInterval(() => {
      this.loadAppointmant();
    }, 10000);
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
        this.filteredAppointment = this.appointments;
      },
      (err) => {
        this.error = err;
      }, () => {
        this.doctorSelected(this.doctorID);
      }
    );
  }


  private loaddoctors() {
    this.employeeService.get_employee().subscribe(
      (res: Employee[]) => {
        this.doctorsID = res;
        // console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  doctorSelected(value: any) {
    this.selectedDoctor = value;
    if (this.selectedDoctor !== '-- Doctor --') {
      this.filteredAppointment = this.appointments.filter(x => x.empID.toString() === value);
      console.log(this.filteredAppointment);
    } else {
      this.filteredAppointment = this.appointments;
    }
  }

  getClinicName(value: any) {
    const k = this.clinics.findIndex(x => x.clinicID === value);
    if (k !== -1) {
      return JSON.stringify(this.clinics[k].clinicname);
    }
  }

  dateChanged() {
    // TODO: implement this function
    // get appointments by date
  }

  update_checkin(CurrentAppointment: any) {
    this.appointmentService.update_checkin(CurrentAppointment)
      .subscribe(
        (res: Appointment[]) => {
          this.appointments = res;
        },
        (err) => {
          this.error = err;
          this.messageService.add({
            severity: 'error',
            summary: 'Error! Try Again',
            detail: '' + err
          });
        }
      );
  }

  appointmentDone(appID: number) {

  }

  done_checkin(CurrentAppointment: any) {
    this.appointmentService.update_done(CurrentAppointment)
      .subscribe(
        (res: Appointment[]) => {
          this.appointments = res;
        },
        (err) => {
          this.error = err;
          this.messageService.add({
            severity: 'error',
            summary: 'Error! Try Again',
            detail: '' + err
          });
        }
      );
  }

  private loadDoctorId() {
    this.doctorID = this.authService.emp.empID;
    console.log('doctor id: ' + this.doctorID);
  }

  openHistoryComponent(patientID: any) {
    const modalRef = this.modalService.open(DoctorPatientHistoryComponent);
    modalRef.componentInstance.employeeID = this.authService.getUserId();
    modalRef.componentInstance.patientID = patientID;
  }
}
