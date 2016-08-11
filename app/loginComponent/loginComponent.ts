import { Component, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import {  loginService } from '../services'
import { loginResponse } from '../classes';
declare var $:any;
@Component({
  //selector: 'login-component',
  templateUrl: 'app/loginComponent/loginComponent.html',
  //templateUrl: 'app/loginComponent/test.html',
  directives: [ROUTER_DIRECTIVES]  
})
export class loginComponent implements OnDestroy {
    loginModel:any = {
        user: "", pass: ""
    };
    constructor(private _router: Router, private _loginService:loginService){
        this.loginModel.user = "";
        this.loginModel.pass = "";
        $("body").addClass("gray-bg");
        //_router.navigate(['application']);
        console.log(_loginService.login("",""));
    }
    ngOnDestroy(){
        $("body").removeClass("gray-bg");
    }
    loginApp(){
        console.log("loginModel ",this.loginModel);
        let __loginResponse:loginResponse = this._loginService.login(this.loginModel.user,this.loginModel.pass);
        console.log(__loginResponse);
        if(__loginResponse.result){
            setTimeout(()=>{
                this._router.navigate(['/application']);
            },100);
        }
    }
}