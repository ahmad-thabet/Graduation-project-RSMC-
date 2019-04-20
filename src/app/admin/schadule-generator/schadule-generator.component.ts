import {Component, OnInit} from '@angular/core';
import {SchedulerEvent} from '@progress/kendo-angular-scheduler';
import {displayDate, sampleData} from './events-utc';

@Component({
  selector: 'app-schadule-generator',
  templateUrl: './schadule-generator.component.html',
  styleUrls: ['./schadule-generator.component.css']
})
export class SchaduleGeneratorComponent implements OnInit {

  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleData;


  constructor() {
  }

  ngOnInit() {
  }

}
