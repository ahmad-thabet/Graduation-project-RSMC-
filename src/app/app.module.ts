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
import { EmployeeCreateComponent } from './admin/employee-create/employee-create.component';
import { EmployeeListComponent } from './admin/employee-list/employee-list.component';
import { AppointmentListComponent } from './admin/appointment-list/appointment-list.component';
import { AppointmentCreateComponent } from './admin/appointment-create/appointment-create.component';
import {CalendarModule} from 'primeng/calendar';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'admin', component: AdminComponent, children: [
      {path: 'patient-create', component: PatientCreateComponent},
      {path: 'patient-list', component: PatientListComponent},
      {path: 'emp-create', component: EmployeeCreateComponent},
      {path: 'emp-list', component: EmployeeListComponent},
      {path: 'app-create', component: AppointmentCreateComponent},
      {path: 'app-list', component: AppointmentListComponent}
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
