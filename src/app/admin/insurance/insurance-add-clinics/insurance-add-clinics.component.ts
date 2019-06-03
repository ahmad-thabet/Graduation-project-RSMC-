import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ClinicServiceService} from '../../../service/clinic-service.service';
import {InsuranceServiceService} from '../../../service/insurance-service.service';
import {Clinic} from '../../../models/clinic.model';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-insurance-add-clinics',
  templateUrl: './insurance-add-clinics.component.html',
  styleUrls: ['./insurance-add-clinics.component.css']
})
export class InsuranceAddClinicsComponent implements OnInit {

  @Input() title = `Add Clinics`;
  @Input() id; // this is insurance id in array
  selectedClinics: any[] = []; // this will have all clinics id's
  price = 0; //this is the price


  clinics: Clinic[];
  cc: SelectItem[];

  constructor(public activeModal: NgbActiveModal,
              private clinicService: ClinicServiceService,
              private insuranceService: InsuranceServiceService) {
  }

  ngOnInit() {
    this.loadClinics();

  }

  private loadClinics() {
    this.clinicService.get_clinic().subscribe(
      (res: Clinic[]) => {
        this.clinics = res;
        console.log(res);
      },
      () => {
      }, () => {
        this.formatData();
      }
    );
  }

  private formatData() {
    this.cc = [];
    this.clinics.forEach(x => {
      this.cc.push({label: x.clinicname, value: x.clinicID});
    });
    console.log(this.cc);
  }

  AddClinics() {
    // do request here
    this.activeModal.close('Close click');
  }
}
