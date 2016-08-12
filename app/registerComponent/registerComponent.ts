import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import {  ROUTER_DIRECTIVES} from '@angular/router';
declare var $:any;
@Component({
  selector: 'register-component',
  templateUrl: 'app/registerComponent/registerComponent.html',
  directives: [ROUTER_DIRECTIVES]
})
export class registerComponent implements AfterViewInit,OnDestroy {
    ngAfterViewInit(){
        //$("body").addClass("gray-bg");
        parent.document.body.classList.add("gray-bg");
//        $('.i-checks').iCheck({
//            checkboxClass: 'icheckbox_square-green',
//            radioClass: 'iradio_square-green',
//        });
    }
    ngOnDestroy(){
        //$("body").removeClass("gray-bg");
        parent.document.body.className = parent.document.body.className.replace("gray-bg","");
    }
}