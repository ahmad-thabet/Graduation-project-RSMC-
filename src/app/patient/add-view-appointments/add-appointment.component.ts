import {ChangeDetectionStrategy, Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {CalendarEvent, CalendarView} from 'angular-calendar';
import {IEmployee} from '../../models/employee.model';
import {FormControl} from '@angular/forms';
import {IClinic} from '../../models/clinic.model';
import {addDays, addMinutes, isSameDay, isSameMonth,} from 'date-fns';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css'],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddAppointmentComponent implements OnInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  @ViewChild('content') myDiv: ElementRef;
  view: CalendarView = CalendarView.Month;
  choosenDate: any = {};
  doctor = new FormControl();
  errorMessage: string;
  doctors: IEmployee[] = [{firstname: 'aaa'}, {firstname: 'bbb'}];
  selctedDoctor: IEmployee = {};
  clinics: IClinic[] = [{name: 'clinic1'}, {name: 'clinic2'}, {name: 'clinic3'}];
  selctedClicnic: IClinic = {};
  showError = false;
  viewDate: Date = new Date();
  available: any[] = [{start: '8:00', end: '8:25'},
    {start: '8:30', end: '8:55'},
    {start: '9:00', end: '9:25'},
    {start: '9:30', end: '9:55'},
    {start: '10:00', end: '10:25'},
    {start: '10:30', end: '10:55'}
  ];
  reserved: any[] = [{start: '8:00', end: '8:25'}];
  refresh: Subject<any> = new Subject();
  patientEvents: CalendarEvent[] = [{
    start: addDays(new Date(), 10),
    end: addMinutes(addDays(new Date(), 10), 25),
    title: 'Patient Event',
    allDay: false,
  }];
  activeDayIsOpen = false;

  constructor() {
    this.choosenDate.dayDate = new Date().toString().substring(0, 15);
    console.log(this.choosenDate);
  }

  print() {
    console.log(this.selctedDoctor);
  }

  isReserved(start) {
    for (const ap of this.reserved) {
      if (ap.start === start) {
        return true;
      }
    }
    return false;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  ngOnInit(): void {
  }

  // dayClicked(date) { // you have to update reservedArray when day changes
  //   this.choosenDate = {dayDate: date.date.toString().substring(0, 15)};
  //   console.log(this.choosenDate);
  //   this.activeDayIsOpen = !this.activeDayIsOpen;
  // }
  dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void {
    this.choosenDate = {dayDate: date.toString().substring(0, 15)};
    console.log(this.choosenDate);
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  setTime(start, end) {
    this.choosenDate.start = start;
    this.choosenDate.end = end;
    console.log(this.choosenDate);
  }

  save() {
    if (this.choosenDate.start === undefined) {
      this.errorMessage = 'Please Select One Of The Available Slots';
      this.showError = true;
    } else {
      this.showError = false;
      // do your work here
    }
  }
}

