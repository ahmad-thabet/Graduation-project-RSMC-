import {Component, OnInit} from '@angular/core';
import {ClinicDoctor} from '../../models/clinic-doctor.model';
import {Clinic} from '../../models/clinic.model';
import {Patient} from '../../models/patient.model';
import {Employee} from '../../models/employee.model';
import {ClinicServiceService} from '../../service/clinic-service.service';
import {AppoinmentServiceService} from '../../service/appoinment-service.service';
import {Appointment} from '../../models/appointment.model';
import {PatinetSeviceService} from '../../service/patinet-sevice.service';
import {EmployeeServiceService} from '../../service/employee-service.service';
import {ScheduleServiceService} from '../../service/schedule-service.service';
import {Schadule} from '../../models/schedule.model';

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

  appointments: Appointment[];
  appointment = new Appointment(0, 0, 0, 0, 0, new Date(), new Date());

  AllApoin: any[] = [];

  doctors: ClinicDoctor[];
  doctorss: ClinicDoctor[];

  clinics: Clinic[];
  error = '';
  success = '';
  patients: Patient[];
  date5: Date;

  minDate = new Date();
  maxDate = new Date();

  doctorsID: Employee[] = [];
  doctorsIDs: Employee[] = [];

  doctorsSchedule: Schadule[] = [];
  doctorsSchedules: Schadule[] = [];

  invalidDates: Array<Date> = [];
  slots: Appointment[];

  constructor(private clinicService: ClinicServiceService,
              private appointmentService: AppoinmentServiceService,
              private  patinetservice: PatinetSeviceService,
              private employeeService: EmployeeServiceService,
              private scheduleService: ScheduleServiceService) {
  }

  ngOnInit() {
    // load stuff here
    this.loaddoctors();
    this.loadSchedule();
    this.loadalldoctors();
    this.loadAppointmant();
    this.loadClinics();
    this.loadpatient();
    this.maxDate.setFullYear(this.minDate.getFullYear(), this.minDate.getMonth() + 11, this.minDate.getDay());
  }

  filterDates() {

    let invalidDates = [];
    const validDates = [];

    let startDate;
    let endDate;
    for (const i of this.doctorsSchedules) {
      const days = [i.sun, i.mon, i.tue, i.wen, i.thu, i.fri, i.sat];
      startDate = new Date(i.startdate);
      endDate = new Date(i.enddate);

      let temp = new Date(startDate.getTime());
      while (temp.getTime() <= endDate.getTime()) {
        if (days[temp.getDay()].toString() === '1') {
          validDates.push(temp);
        }
        temp = new Date(temp.getTime());
        temp.setDate(temp.getDate() + 1);
      }
      console.log(validDates);
    }

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

    invalidDates = invalidDates.filter((invalidDate) => !validDates.find(
      validDate => validDate.getDate() === invalidDate.getDate()));

    this.invalidDates = invalidDates;
  }

  getCurrentModel() {
    return JSON.stringify(this.selectedClinic + '-' + this.selectedDoctor + '-' + this.date5);
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

  setTimeSlots() {
    // get valid dates of doctor, put it in this.validDates
    // load time slots in all apointment
    // date selected == date 5

    for (const k of this.doctorsSchedules) {
      const startTimeHours = +(k.starttime.split(':')[0]);
      const startTimeMinutes = +(k.starttime.split(':')[1]);
      console.log(startTimeHours + ':' + startTimeMinutes);

      const endTimeHours = +(k.endtime.split(':')[0]);
      const endTimeMinutes = +(k.endtime.split(':')[1]);
      console.log(endTimeHours + ':' + endTimeMinutes);

      const slotLength = +(k.slot);
      const numSlots = ((endTimeHours - startTimeHours) * 60) / slotLength;
      console.log(slotLength);

      let tempStartTimeHours = startTimeHours;
      let tempStartTimeMinutes = startTimeMinutes;
      let tempEndTimeHours;
      let tempEndTimeMinutes;

      for (let i = 0; i < numSlots; i++) {
        tempEndTimeMinutes = tempStartTimeMinutes + slotLength;
        tempEndTimeHours = tempStartTimeHours;


        if (tempEndTimeMinutes >= 60) {
          tempEndTimeMinutes = tempEndTimeMinutes - 60;
          tempEndTimeHours = tempEndTimeHours + 1;
        }

        this.AllApoin.push(tempStartTimeHours + ':' + tempStartTimeMinutes +
          ' - ' + tempEndTimeHours + ':' + tempEndTimeMinutes);

        tempStartTimeMinutes = tempEndTimeMinutes;
        tempStartTimeHours = tempEndTimeHours;
        if (tempStartTimeMinutes >= 60) {
          tempStartTimeMinutes = tempStartTimeMinutes - 60;
          tempStartTimeHours++;
        }

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

  private loadSchedule() {
    this.scheduleService.get_schedule().subscribe(
      (res: Schadule[]) => {
        this.doctorsSchedule = res;
        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  get_doctors() {

    /*    console.log('wwww ' + this.doctors.filter(x => x.clinicID === this.selectedClinic));*/
    /*    this.clinicService.getID(this.selectedClinic)
          .subscribe(
            (res: Employee[]) => {
              // Update the list of cars
              console.log('selected clinic ' + this.selectedClinic);
              this.doctorsID = res;

              // Inform the user
              console.log('clinic doctors ' + res);
              this.success = 'Created successfully';
              console.log(this.success);
              // Reset the form
            },
            (err) => this.error = err
          );*/
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

    // clear temp array
    this.doctorsSchedules.splice(0, this.doctorsSchedules.length);

    this.doctorsSchedules = this.doctorsSchedule.filter(x =>
      (x.clinicID === this.selectedClinic) && (x.empID === this.selectedDoctor));

    /*    for (const i of this.doctorsSchedule) {
          if (i.clinicID === this.selectedClinic && i.empID === this.selectedDoctor) {
            this.doctorsSchedules.push(i);
          }
        }*/

    console.log(this.doctorsSchedules);

    this.filterDates();
    this.loadslot();

  }

  private loadslot() {
    this.appointmentService.getslots(this.selectedDoctor, this.selectedClinic).subscribe(
      (res: Appointment[]) => {
        this.slots = res;
        console.log(this.slots);
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
