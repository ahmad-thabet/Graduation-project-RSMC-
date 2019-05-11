import {Component, OnInit} from '@angular/core';
import {SchedulerEvent} from '@progress/kendo-angular-scheduler';
import {displayDate, sampleData} from './events-utc';
import {MessageService} from 'primeng/api';
import {Schadule} from '../../models/schedule.model';
import {ScheduleServiceService} from '../../service/schedule-service.service';


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
  error = '';
  success = '';
  selectedFromTime;
  selectedToTime;
  selectedSlotTime = 5;
  schedule = new Schadule(0, 0, 0, '', '', 0, new Date(), new Date(), 0, 0, 0, 0, 0, 0, 0);
  schedules: Schadule[];
  constructor(private messageService: MessageService,
              private scheduleServie: ScheduleServiceService) {
  }

  ngOnInit() {
    this.loadschedule();
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
}
