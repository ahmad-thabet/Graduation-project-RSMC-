import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {AdminMenuComponent} from './admin/admin-menu/admin-menu.component';
import {AuthService} from './login/auth.service';
import {PatientListComponent} from './admin/patient-list/patient-list.component';
import {PatientProfileDetailsComponent} from './admin/patient-list/patient-profile-details/patient-profile-details.component';
import {PatientCreateComponent} from './admin/patient-create/patient-create.component';
import {AdminAppointmentsComponent} from './admin/admin-appointments/admin-appointments.component';
import {AppointmentsListComponent} from './admin/admin-appointments/appointments-list/appointments-list.component';
import {AppointmentsCreateComponent} from './admin/admin-appointments/appointments-create/appointments-create.component';
import {PatinetSeviceService} from './service/patinet-sevice.service';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeCreateComponent} from './admin/employee-create/employee-create.component';
import {EmployeeListComponent} from './admin/employee-list/employee-list.component';
import {AppointmentListComponent} from './admin/appointment-list/appointment-list.component';
import {AppointmentCreateComponent} from './admin/appointment-create/appointment-create.component';
import {SchaduleGeneratorComponent} from './admin/schadule-generator/schadule-generator.component';
import {PatientEditDetailsComponent} from './admin/patient-list/patient-edit-details/patient-edit-details.component';
import {PatientListFullComponent} from './admin/patient-list/patient-list-full/patient-list-full.component';
import {EmployeeEditDetailsComponent} from './admin/employee-list/employee-edit-details/employee-edit-details.component';
import {EmployeeListFullComponent} from './admin/employee-list/employee-list-full/employee-list-full.component';
import {EmployeeProfileDetailsComponent} from './admin/employee-list/employee-profile-details/employee-profile-details.component';
import {ExceptionDateComponent} from './admin/exception-date/exception-date.component';
import {VacationDateComponent} from './admin/vacation-date/vacation-date.component';
import {InsuranceComponent} from './admin/insurance/insurance.component';
import {InsuranceCreateComponent} from './admin/insurance/insurance-create/insurance-create.component';
import {InsuranceUpdateComponent} from './admin/insurance/insurance-update/insurance-update.component';
import {ClinicComponent} from './admin/clinic/clinic.component';
import {ClinicCreateComponent} from './admin/clinic/clinic-create/clinic-create.component';
import {ClinicListComponent} from './admin/clinic/clinic-list/clinic-list.component';
import {ClinicDetailsComponent} from './admin/clinic/clinic-details/clinic-details.component';
import {SchedulerModule} from '@progress/kendo-angular-scheduler';
import {PatientComponent} from './patient/patient.component';
import {PatientMenuComponent} from './patient/patient-menu/patient-menu.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlatpickrModule} from 'angularx-flatpickr';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import 'flatpickr/dist/flatpickr.css';
import {ProfileComponent} from './patient/profile/profile.component';
import {NgxFileHelpersModule} from 'ngx-file-helpers';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {DlDateTimeDateModule, DlDateTimePickerModule} from 'angular-bootstrap-datetimepicker';
import {DoctorComponent} from './doctor/doctor.component';
import {DoctorMenuComponent} from './doctor/doctor-menu/doctor-menu.component';
import {DoctorScheduleComponent} from './doctor/doctor-schedule/doctor-schedule.component';
import {DoctorVacationComponent} from './doctor/doctor-vacation/doctor-vacation.component';
import {DoctorExceptionComponent} from './doctor/doctor-exception/doctor-exception.component';
import {DoctorServiceService} from './service/doctor-service.service';
import {ReceptionComponent} from './reception/reception.component';
import {ReceptionMenuComponent} from './reception/reception-menu/reception-menu.component';
import {AddAppointmentComponent} from './patient/add-view-appointments/add-appointment.component';
import {ClinicServiceService} from './service/clinic-service.service';
import {ClinicListFullComponent} from './admin/clinic/clinic-list-full/clinic-list-full.component';
import {AdminPaymentComponent} from './admin/admin-payment/admin-payment.component';
import {InsuranceServiceService} from './service/insurance-service.service';
import {PatientPaymentListComponent} from './patient/patient-payment-list/patient-payment-list.component';
import {ChartsModule} from 'ng2-charts';
import {ChartsComponent} from './admin/charts/charts.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'admin', component: AdminComponent, children: [
      {path: '', component: ChartsComponent},
      {path: 'patient-create', component: PatientCreateComponent},
      {path: 'payments', component: AdminPaymentComponent},
      {
        path: 'patient-list', component: PatientListComponent, children: [
          {path: '', component: PatientListFullComponent},
          {path: ':id/edit', component: PatientEditDetailsComponent},
          {path: ':id', component: PatientProfileDetailsComponent}
        ]
      },
      {path: 'emp-create', component: EmployeeCreateComponent},
      {
        path: 'emp-list', component: EmployeeListComponent, children: [
          {path: '', component: EmployeeListFullComponent},
          {path: ':id/edit', component: EmployeeEditDetailsComponent},
          {path: ':id', component: EmployeeProfileDetailsComponent}
        ]
      },
      {path: 'app-create', component: AppointmentCreateComponent},
      {path: 'app-list', component: AppointmentListComponent},
      {path: 'sch-list', component: SchaduleGeneratorComponent},
      {path: 'sch-gen', component: SchaduleGeneratorComponent},
      {path: 'exc-date', component: ExceptionDateComponent},
      {path: 'vac-date', component: VacationDateComponent},
      {path: 'insurance', component: InsuranceComponent},
      {
        path: 'clinics', component: ClinicComponent, children: [
          {path: ':id', component: ClinicDetailsComponent},
          {path: '', component: ClinicListFullComponent}
        ]
      },
    ]
  },
  {
    path: 'patient', component: PatientComponent, children: [
      {path: 'add-view-appointments', component: AddAppointmentComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'payments', component: PatientPaymentListComponent}

    ]
  },
  {
    path: 'doctor', component: DoctorComponent, children: [
      {path: 'schedule', component: DoctorScheduleComponent},
      {path: 'vacation', component: DoctorVacationComponent},
      {path: 'exception', component: DoctorExceptionComponent}
    ]
  },
  {
    path: 'reception', component: ReceptionComponent, children: [
      {path: 'patient-create', component: PatientCreateComponent},
      {path: 'payments', component: AdminPaymentComponent},
      {
        path: 'patient-list', component: PatientListComponent, children: [
          {path: '', component: PatientListFullComponent},
          {path: ':id/edit', component: PatientEditDetailsComponent},
          {path: ':id', component: PatientProfileDetailsComponent}
        ]
      },
      {path: 'app-create', component: AppointmentCreateComponent},
      {path: 'app-list', component: AppointmentListComponent},
      {path: 'sch-list', component: SchaduleGeneratorComponent},
      {path: 'exc-date', component: ExceptionDateComponent},
      {path: 'vac-date', component: VacationDateComponent},
      {path: 'insurance', component: InsuranceUpdateComponent},
      {
        path: 'clinics', component: ClinicComponent, children: [
          {path: ':id', component: ClinicDetailsComponent},
          {path: '', component: ClinicListComponent}
        ]
      }
    ]
  }
];

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AdminMenuComponent,
    PatientListComponent,
    PatientProfileDetailsComponent,
    PatientCreateComponent,
    AdminAppointmentsComponent,
    AppointmentsListComponent,
    AppointmentsCreateComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    AppointmentListComponent,
    AppointmentCreateComponent,
    SchaduleGeneratorComponent,
    PatientEditDetailsComponent,
    PatientListFullComponent,
    EmployeeEditDetailsComponent,
    EmployeeListFullComponent,
    EmployeeProfileDetailsComponent,
    ExceptionDateComponent,
    VacationDateComponent,
    InsuranceComponent,
    InsuranceCreateComponent,
    InsuranceUpdateComponent,
    ClinicComponent,
    ClinicCreateComponent,
    ClinicListComponent,
    ClinicDetailsComponent,
    PatientComponent,
    PatientMenuComponent,
    AddAppointmentComponent,
    ProfileComponent,
    DoctorComponent,
    DoctorMenuComponent,
    DoctorScheduleComponent,
    DoctorVacationComponent,
    DoctorExceptionComponent,
    ReceptionComponent,
    ReceptionMenuComponent,
    ClinicListFullComponent,
    AdminPaymentComponent,
    PatientPaymentListComponent,
    ChartsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    SchedulerModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    NgbModalModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgxFileHelpersModule,
    MatFormFieldModule,
    MatInputModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    ChartsModule
  ],
  exports: [AddAppointmentComponent],
  providers: [PatinetSeviceService, AuthService, DoctorServiceService, ClinicServiceService, FormsModule, InsuranceServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
