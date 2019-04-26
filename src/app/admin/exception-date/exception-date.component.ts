import {Component, OnInit} from '@angular/core';
import {DoctorServiceService} from '../../service/doctor-service.service';
import {Exception} from '../../models/exception.model';

@Component({
  selector: 'app-exception-date',
  templateUrl: './exception-date.component.html',
  styleUrls: ['./exception-date.component.css']
})
export class ExceptionDateComponent implements OnInit {
  exception = new Exception(0, 0, new Date(), '', '', '', false);
  exceptions: Exception[];
  sucssess = '';
  error = '';

  constructor(private doctorService: DoctorServiceService) {
  }

  ngOnInit() {
    this.loadexception();
  }
  private loadexception() {
    this.doctorService.get_exception().subscribe(
      (res: Exception[]) => {
        this.exceptions = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
