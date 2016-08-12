import { Component, AfterViewInit, OnDestroy } from '@angular/core';
declare var $:any;
@Component({
  selector: 'forget-component',
  templateUrl: 'app/forgetComponent/forgetComponent.html'
})
export class forgetComponent implements AfterViewInit,OnDestroy{
    ngAfterViewInit(){
        //$("body").addClass("gray-bg");
        parent.document.body.classList.add("gray-bg");
    }
    ngOnDestroy(){
        //$("body").removeClass("gray-bg");
        parent.document.body.className = parent.document.body.className.replace("gray-bg",""); 
    }
}