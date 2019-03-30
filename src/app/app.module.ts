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

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'admin', component: AdminComponent, children: [
      {path: 'patient-create', component: PatientCreateComponent},
      {path: 'patient-list', component: PatientListComponent},
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
    AppointmentsCreateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
