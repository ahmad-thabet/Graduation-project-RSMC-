import {Component, OnInit} from '@angular/core';
import {displayDate} from '../../admin/schadule-generator/events-utc';
import {SchedulerEvent} from '@progress/kendo-angular-scheduler';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.css']
})
export class DoctorScheduleComponent implements OnInit {

  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
