import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {AdminComponent} from './admin/admin.component';
import {AdminMenuComponent} from './admin/admin-menu/admin-menu.component';
import {AuthService} from './login/auth.service';
import {PatientListComponent} from './admin/patient-list/patient-list.component';
import {PatientProfileDetailsComponent} from './admin/patient-list/patient-profile-details/patient-profile-details.component';
import {PatientCreateComponent} from './admin/patient-create/patient-create.component';
import {CommonModule} from '@angular/common';
import {AdminAppointmentsComponent} from './admin/admin-appointments/admin-appointments.component';
import {AppointmentsListComponent} from './admin/admin-appointments/appointments-list/appointments-list.component';
import {AppointmentsCreateComponent} from './admin/admin-appointments/appointments-create/appointments-create.component';
import {PatinetSeviceService} from './service/patinet-sevice.service';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeCreateComponent} from './admin/employee-create/employee-create.component';
import {EmployeeListComponent} from './admin/employee-list/employee-list.component';
import {AppointmentListComponent} from './admin/appointment-list/appointment-list.component';
import {AppointmentCreateComponent} from './admin/appointment-create/appointment-create.component';
import {CalendarModule} from 'primeng/calendar';
import {SchaduleGeneratorComponent} from './admin/schadule-generator/schadule-generator.component';
import {PatientEditDetailsComponent} from './admin/patient-list/patient-edit-details/patient-edit-details.component';
import {PatientListFullComponent} from './admin/patient-list/patient-list-full/patient-list-full.component';
import {EmployeeEditDetailsComponent} from './admin/employee-list/employee-edit-details/employee-edit-details.component';
import {EmployeeListFullComponent} from './admin/employee-list/employee-list-full/employee-list-full.component';
import {EmployeeProfileDetailsComponent} from './admin/employee-list/employee-profile-details/employee-profile-details.component';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DoctorComponent} from './doctor/doctor.component';
import {DoctorMenuComponent} from './doctor/doctor-menu/doctor-menu.component';
import {DoctorScheduleComponent} from './doctor/doctor-schedule/doctor-schedule.component';
import {DoctorVacationComponent} from './doctor/doctor-vacation/doctor-vacation.component';
import {DoctorExceptionComponent} from './doctor/doctor-exception/doctor-exception.component';
import {DoctorServiceService} from './service/doctor-service.service';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'admin', component: AdminComponent, children: [
      {path: 'patient-create', component: PatientCreateComponent},
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
          {path: ':id', component: ClinicDetailsComponent}
        ]
      }
    ]
  },
  {
    path: 'doctor', component: DoctorComponent, children: [
      {path: 'schedule', component: DoctorScheduleComponent},
      {path: 'vacation', component: DoctorVacationComponent},
      {path: 'exception', component: DoctorExceptionComponent}
    ]
  },

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
    DoctorComponent,
    DoctorMenuComponent,
    DoctorScheduleComponent,
    DoctorVacationComponent,
    DoctorExceptionComponent

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    CalendarModule,
    CommonModule,
    SchedulerModule,
    BrowserAnimationsModule
  ],
  providers: [PatinetSeviceService, AuthService, DoctorServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
