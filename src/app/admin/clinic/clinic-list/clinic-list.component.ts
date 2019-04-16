import {Component, OnInit} from '@angular/core';
import {PatinetSeviceService} from '../../../service/patinet-sevice.service';
import {Clinic} from '../../../models/clinic.model';


@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.css']
})
export class ClinicListComponent implements OnInit {
  clinics: Clinic[];
  error = '';
  success = '';

  constructor(private patientService: PatinetSeviceService) {
  }

  ngOnInit() {
    this.loadClinics();
  }

  private loadClinics() {
    this.patientService.get_clinics().subscribe(
      (res: Clinic[]) => {
        this.clinics = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

}
