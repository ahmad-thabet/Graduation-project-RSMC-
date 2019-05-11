import {Component, OnInit} from '@angular/core';
import {Appointment} from '../../../models/appointment.model';
import {Clinic} from '../../../models/clinic.model';
import {ClinicDoctor} from '../../../models/clinic-doctor.model';
import {ClinicServiceService} from '../../../service/clinic-service.service';
import {AppoinmentServiceService} from '../../../service/appoinment-service.service';

@Component({
  selector: 'app-appointments-create',
  templateUrl: './appointments-create.component.html',
  styleUrls: ['./appointments-create.component.css']
})
export class AppointmentsCreateComponent implements OnInit {
  appointments: Appointment[];
  appointment = new Appointment(0, 0, 0, 0, 0, new Date(), new Date());
  doctors: ClinicDoctor[];
  clinics: Clinic[];
  error = '';
  success = '';

  constructor(private clinicService: ClinicServiceService,
              private appointmentService: AppoinmentServiceService) {
  }

  ngOnInit() {
    this.loadalldoctors() ;
    this.loadAppointmant();
    this.loadClinics();
  }

  private loadClinics() {
    this.clinicService.get_clinic().subscribe(
      (res: Clinic[]) => {
        this.clinics = res;
        console.log(res);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  private loadalldoctors() {
    this.clinicService.get_clinic_doctors().subscribe(
      (res: ClinicDoctor[]) => {
        this.doctors = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  private loadAppointmant() {
    this.appointmentService.get_appointment().subscribe(
      (res: Appointment[]) => {
        this.appointments = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  add_appointment(f) {
    this.appointmentService.add_appointment(this.appointment)
      .subscribe(
        (res: Appointment[]) => {
          // Update the list of cars
          this.appointments = res;
          // Inform the user
          console.log(this.appointments);
          this.success = 'Created successfully';
          console.log(this.success);
          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );
  }
}
