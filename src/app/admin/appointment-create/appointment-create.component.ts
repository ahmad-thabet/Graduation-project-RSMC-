import {Component, OnInit} from '@angular/core';
import {displayDate} from '../schadule-generator/events-utc';
import {SchedulerEvent} from '@progress/kendo-angular-scheduler';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent implements OnInit {
  value: any;

  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
