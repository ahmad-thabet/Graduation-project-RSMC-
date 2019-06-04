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
  price = 0; // this is the price
  insurancepaice: InsurancePrice[];
  insurancePrice = new InsurancePrice(0, 0, 0, 0);
  clinics: Clinic[];
  cc: SelectItem[];
  error = '';
  success = '';

  constructor(public activeModal: NgbActiveModal,
              private clinicService: ClinicServiceService,
              private insuranceService: InsuranceServiceService) {
  }

  ngOnInit() {
    this.loadClinics();
    this.loadInsurancePrice();

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
    this.clinicService.add_insurancePrice(this.insurancePrice)
      .subscribe(
        (res: InsurancePrice[]) => {
          // Update the list of cars
          this.insurancepaice = res;
          // Inform the user
          console.log(this.insurancepaice);
          this.success = 'Created successfully';
          console.log(this.success);

          // Reset the form
        },
        (err) => {
          this.error = err;

        }, () => {
          this.activeModal.close('Close click');
        }
      );
  }

  private loadInsurancePrice() {
    this.clinicService.get_insuranceprice().subscribe(
      (res: InsurancePrice[]) => {
        this.insurancepaice = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }


}
