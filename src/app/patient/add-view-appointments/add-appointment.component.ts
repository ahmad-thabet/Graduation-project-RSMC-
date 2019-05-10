import {Component, OnInit} from '@angular/core';
import {Employee} from '../../models/employee.model';
import {Clinic} from '../../models/clinic.model';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css'],
})
export class AddAppointmentComponent implements OnInit {

  selectedClinic: any;
  selectedDoctor: any;
  selectedFromDate = new Date();
  selectedToDate = new Date();
  selectedAppointment: any;
  selectedPatient: any;

  allDoctors: Employee[] = [];
  allClinics: Clinic[] = [];
  allAppointments: any[] = [new Date(), new Date(), new Date(), new Date(), new Date(),
    new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()];


  date5: Date;
  minDate = new Date();
  invalidDates: Array<Date> = [];
  validDates: Array<Date> = [];


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


/*
import {ChangeDetectionStrategy, Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {endOfDay, isSameDay, isSameMonth, startOfDay} from 'date-fns';
import {Subject} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css'],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddAppointmentComponent implements OnInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  @ViewChild('content') myDiv: ElementRef;
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({event}: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({event}: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };
  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = [];
  //   {
  //     start: subDays(startOfDay(new Date()), 1),
  //     end: addDays(new Date(), 1),
  //     title: 'A 3 day event',
  //     color: colors.red,
  //     actions: this.actions,
  //     allDay: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //     draggable: true
  //   },
  //   {
  //     start: startOfDay(new Date()),
  //     title: 'An event with no end date',
  //     color: colors.yellow,
  //     actions: this.actions
  //   },
  //   {
  //     start: subDays(endOfMonth(new Date()), 3),
  //     end: addDays(endOfMonth(new Date()), 3),
  //     title: 'A long event that spans 2 months',
  //     color: colors.blue,
  //     allDay: true
  //   },
  //   {
  //     start: addHours(startOfDay(new Date()), 2),
  //     end: new Date(),
  //     title: 'A draggable and resizable event',
  //     color: colors.yellow,
  //     actions: this.actions,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //     draggable: true
  //   }
  // ];
  activeDayIsOpen = true;

  constructor(private modal: NgbModal) {
  }

  dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void {
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

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd
                    }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = {event, action};
    this.modal.open(this.modalContent, {size: 'lg'});
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
    console.log(this.events);
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  ngOnInit(): void {
  }
}
*/
