import { EmployeeRegService } from './../employee_registration_dashboard/employee_reg.service';
import { EmployeeRegDashboardComponent } from './../employee_registration_dashboard/employee_reg_dashboard.component';
import { RegistrationComponent } from './employee_reg.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import {HttpClientModule} from "@angular/common/http";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const registrationRoutes: Routes = [{
    path: '',
    component: EmployeeRegDashboardComponent
}]

@NgModule({
  declarations: [
   RegistrationComponent,
   EmployeeRegDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(registrationRoutes),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeRegService],
  entryComponents: [RegistrationComponent]
})
export class EmployeeRegModule {

}