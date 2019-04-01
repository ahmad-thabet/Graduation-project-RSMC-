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
      {path: 'sch-gen', component: SchaduleGeneratorComponent}
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

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    CalendarModule
  ],
  providers: [PatinetSeviceService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
