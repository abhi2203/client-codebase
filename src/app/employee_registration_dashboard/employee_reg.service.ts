import { globalConstant } from './../common.constant';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EmployeeRegService {

    constructor(private httpClient: HttpClient){

    }

    saveNewRegistration(newEmpReg){
        return this.httpClient.post(globalConstant.baseUrl+'submit', newEmpReg, {responseType: 'text', observe: 'response'});
    }

    getAllEmployee(){
        return this.httpClient.get(globalConstant.baseUrl+'employees', {responseType: 'json', observe: 'response'});
    }
}