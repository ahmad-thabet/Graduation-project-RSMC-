import {Component, OnInit} from '@angular/core';
import {InsuranceServiceService} from '../../../service/insurance-service.service';
import {Insurance} from '../../../models/insurance.model';
import {Subinsurance} from '../../../models/subinsurance.model';
import {Employee} from '../../../models/employee.model';

@Component({
  selector: 'app-insurance-create',
  templateUrl: './insurance-create.component.html',
  styleUrls: ['./insurance-create.component.css']
})
export class InsuranceCreateComponent implements OnInit {

  insurance = new Insurance(0, '');
  subInsurance = new Subinsurance(0, 0, 0, '');

  constructor(private insuranceService: InsuranceServiceService) {
  }

  ngOnInit() {
  }


  add_insurance(f) {
    this.insuranceService.add_insurance(this.insurance, this.subInsurance)
      .subscribe(
        (res: any[]) => {
          // Reset the form
          f.reset();
        },
        (err) => console.log(err)
      );

  }
}
