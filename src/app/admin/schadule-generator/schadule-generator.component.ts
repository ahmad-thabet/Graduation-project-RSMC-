import {Component, OnInit} from '@angular/core';
import {SchedulerEvent} from '@progress/kendo-angular-scheduler';
import {displayDate, sampleData} from './events-utc';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-schadule-generator',
  templateUrl: './schadule-generator.component.html',
  styleUrls: ['./schadule-generator.component.css']
})
export class SchaduleGeneratorComponent implements OnInit {

  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleData;

  selectedDays: any[];
  days = [
    {label: 'Saturday', value: 'saturday'},
    {label: 'Sunday', value: 'sunday'},
    {label: 'Monday', value: 'Monday'},
    {label: 'Tuesday', value: 'tuesday'},
    {label: 'Wednesday', value: 'wednesday'},
    {label: 'Thursday', value: 'thursday'},
    {label: 'Friday', value: 'friday'}
  ];

  selectedFromTime;
  selectedToTime;
  selectedSlotTime = 5;


  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
  }

  onGenerate() {
    this.messageService.add({severity: 'info', summary: 'Generated', detail: 'details showing below'});
  }

  onSubmit() {
    this.messageService.add({severity: 'success', summary: 'Submitted', detail: 'Submitted Successfully'});
  }

  onClear() {
    this.messageService.add({severity: 'warn', summary: 'Cleared', detail: 'All selection cleared'});
  }

}
