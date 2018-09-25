import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './authguard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
   path: 'login',
   component: LoginComponent,
   canActivate: [AuthGuard]
}
,{
    path: 'registration',
    loadChildren: './employee_registration/employee_reg.module#EmployeeRegModule',
    canActivate: [AuthGuard]
},
{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
}]

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [AuthGuard, LoginService],
    bootstrap: [AppComponent]
})
export class AppModule { }
