import {Component, OnInit} from '@angular/core';
import {displayDate} from '../schadule-generator/events-utc';
import {SchedulerEvent} from '@progress/kendo-angular-scheduler';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
