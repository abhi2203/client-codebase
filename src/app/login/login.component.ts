import { Routes, Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    isFromSubmitted = false;
    user = {
    'username': '',
    'password': ''
  };

  constructor(private _loginService: LoginService, private _routes: Router){
  }

login(){
   this._routes.navigate(['registration']);
}

}