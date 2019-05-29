import {Component, OnInit} from '@angular/core';
import {SchedulerEvent} from '@progress/kendo-angular-scheduler';
import {displayDate, sampleData} from './events-utc';
import {MessageService} from 'primeng/api';
import {Schadule} from '../../models/schedule.model';
import {ScheduleServiceService} from '../../service/schedule-service.service';
import {Employee} from '../../models/employee.model';
import {EmployeeServiceService} from '../../service/employee-service.service';
import {Clinic} from '../../models/clinic.model';
import {ClinicServiceService} from '../../service/clinic-service.service';
import {ClinicDoctor} from '../../models/clinic-doctor.model';


@Component({
  selector: 'app-schadule-generator',
  templateUrl: './schadule-generator.component.html',
  styleUrls: ['./schadule-generator.component.css']
})
export class SchaduleGeneratorComponent implements OnInit {

  selectedDoctor: any;
  selectedClinic: any;

  doctorsID: Employee[] = [];
  doctorsIDs: Employee[] = [];
  clinics: Clinic[];

  doctors: ClinicDoctor[];
  doctorss: ClinicDoctor[];

  selectedDays: any[];
  days = [
    {label: 'Saturday', value: 'sat=1'},
    {label: 'Sunday', value: 'sun=1'},
    {label: 'Monday', value: 'mon=1'},
    {label: 'Tuesday', value: 'tue=1'},
    {label: 'Wednesday', value: 'wen=1'},
    {label: 'Thursday', value: 'thu=1'},
    {label: 'Friday', value: 'fri=1'}
  ];

  error = '';
  success = '';

  selectedFromTime;
  selectedToTime;
  selectedSlotTime = 5;

  schedule = new Schadule(0, 0, 0, '', '', 0,
    new Date(), new Date(), 0, 0, 0, 0, 0, 0, 0);
  schedules: Schadule[];

  constructor(private messageService: MessageService,
              private scheduleServie: ScheduleServiceService,
              private employeeService: EmployeeServiceService,
              private clinicService: ClinicServiceService) {
  }

  ngOnInit() {
    this.loaddoctors();
    this.loadschedule();
    this.loadalldoctors();
    this.loadClinics();
  }

  onGenerate(f) {
    this.create_schedule(f);
    this.messageService.add({severity: 'info', summary: 'Generated', detail: 'details showing below'});
  }

  onSubmit() {
    this.messageService.add({severity: 'success', summary: 'Submitted', detail: 'Submitted Successfully'});
  }

  onClear() {
    this.messageService.add({severity: 'warn', summary: 'Cleared', detail: 'All selection cleared'});
  }

  create_schedule(f) {
    this.scheduleServie.add_schedule(this.schedule)
      .subscribe(
        (res: Schadule[]) => {
          // Update the list of cars
          this.schedules = res;
          // Inform the user
          console.log(this.schedules);
          this.success = 'Created successfully';
          console.log(this.success);
          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );
  }

  private loadschedule() {
    this.scheduleServie.get_schedule().subscribe(
      (res: Schadule[]) => {
        this.schedules = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  clinicSelected(id: number) {
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
}
