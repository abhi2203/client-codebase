import { Router } from '@angular/router';
import { EmployeeRegService } from './employee_reg.service';
import { RegistrationComponent } from './../employee_registration/employee_reg.component';
import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
    selector: 'registration-dashboard',
    templateUrl: './employee_reg_dashboard.component.html',
    styleUrls: ['./employee_reg_dashboard.component.css']
})
export class EmployeeRegDashboardComponent implements OnInit{

    bsModalRef: BsModalRef;
    allEmployee: any;
    constructor(private modalService: BsModalService, private employeeService: EmployeeRegService, private routes: Router) {

    }

    ngOnInit(){
       this.employeeService.getAllEmployee()
       .subscribe(response => {
         this.allEmployee = response.body;
       })
    }

    newEmployeeReg() {
          let initialState = {};
         this.bsModalRef = this.modalService.show(RegistrationComponent, {initialState});
         this.modalService.onHide.subscribe(result => {
            let status = this.bsModalRef.content.isSuccess;
            if(status){
                this.ngOnInit();
            }
         })
    }

    logout(){
         this.routes.navigate(['login']);
    }

}