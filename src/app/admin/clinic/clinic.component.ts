import { Component, OnInit } from '@angular/core';
import {ClinicServiceService} from '../../service/clinic-service.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {

  constructor(private clinicservice: ClinicServiceService) { }

  ngOnInit() {
  }

}
