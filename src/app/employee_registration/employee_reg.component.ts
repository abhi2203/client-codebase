import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Component } from '@angular/core';
import { EmployeeRegService } from 'src/app/employee_registration_dashboard/employee_reg.service';

@Component({
   selector: 'app-registration',
   templateUrl: './employee_reg.component.html',
   styleUrls: ['./employee_reg.component.css']
})
export class RegistrationComponent {

newForm = {
    'id': '', // for edit purpose
    'firstName': '',
    'lastName': '',
    'gender': '',
    'dob': Date,
    'department': '',
  };
  maxDate: Date;
  showMessage: string = "";  

constructor(public bsModalRef: BsModalRef, private employeeService: EmployeeRegService){
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
}

  closeModel(){
    this.bsModalRef.hide();
  }

submit(){
  console.log(this.newForm);
  this.bsModalRef.content.isSuccess = false;
  this.employeeService.saveNewRegistration(this.newForm)
  .subscribe(response => {
       console.log(response);
       this.showMessage = response.body;
       this.bsModalRef.content.isSuccess = true;
       setTimeout(() =>{
        this.closeModel()
       },2000 );
  },(error)=>{
    this.showMessage = "error";
    console.log(error);
  })
}
}