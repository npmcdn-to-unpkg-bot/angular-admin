import { Component, AfterViewInit, OnInit } from '@angular/core';
import {leftSidebar, rightSidebar, smallChat, footerComponent, topNav, dashboardHeader, pageContent, dashboard} from '../components'
import { Router } from '@angular/router';
import { tostrService } from '../services'
import {  loginService } from '../services'
import { ROUTER_DIRECTIVES} from '@angular/router';
declare var $:any;
var _directives:any = [
    leftSidebar, 
    rightSidebar, 
    smallChat, 
    footerComponent,
    ROUTER_DIRECTIVES,
    //dashboardHeader,
    //pageContent,
    dashboard,
    topNav
];



@Component({
  //selector: 'admin-component',
  templateUrl: 'app/app/landing.html',
  directives: _directives
})
export class AppComponent implements AfterViewInit, OnInit{
    
    constructor(private _tostrService:tostrService, private _router: Router, private _loginService:loginService){
        console.log("_loginService.isLoggedIn()",_loginService.isLoggedIn());
        if(!_loginService.isLoggedIn()){
            setTimeout(()=>{
                //this._router.navigate(['/']);
            },100);
        }
    }
    ngOnInit(){
        this._loginService.__appHeight = parent.document.body.clientHeight;
        this._loginService.__appWidth = parent.document.body.clientWidth;
        if (parent.document.body.clientWidth < 769) {
            parent.document.body.classList.add('body-small');
        } else {
            parent.document.body.classList.remove('body-small');
        }
        

    }
    ngAfterViewInit(){
        if(!this._loginService.isLoggedIn()) {
            this._tostrService.$tostrServiceEvent.next({ 
                closeButton : true,
                progressBar : true,
                showMethod : "slideDown",
                timeOut : 4000,
                msgBold : "Welcome",
                msgSimple : "Please Login To Enter",
                finalTimeOut : 1300
            });
            return;
        }
        this._tostrService.$tostrServiceEvent.next({ 
            closeButton : true,
            progressBar : true,
            showMethod : "slideDown",
            timeOut : 4000,
            msgBold : "Responsive Admin Theme",
            msgSimple : "Welcome to INSPINIA",
            finalTimeOut : 1300
        });
    }
    onResize(e){
        console.log("onResize ",e.target);
            if (parent.document.body.clientWidth < 769) {
                parent.document.body.classList.add('body-small');
            } else {
                parent.document.body.classList.remove('body-small');
            }
    }
}