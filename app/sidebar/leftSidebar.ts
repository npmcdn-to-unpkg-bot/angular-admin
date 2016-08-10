import { Component, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'left-sidebar',
  templateUrl: 'app/sidebar/leftsidebar.html'
})
export class leftSidebar implements AfterViewInit{
    ngAfterViewInit(){
        $('#side-menu').metisMenu();
    }
}