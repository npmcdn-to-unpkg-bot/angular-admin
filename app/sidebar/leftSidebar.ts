import { Component, AfterViewInit } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
declare var $:any;

@Component({
  selector: 'left-sidebar',
  templateUrl: 'app/sidebar/leftsidebar.html',
  directives: [ROUTER_DIRECTIVES]
})
export class leftSidebar implements AfterViewInit{
    ngAfterViewInit(){
        $('#side-menu').metisMenu();
        $('body.canvas-menu .sidebar-collapse').slimScroll({
            height: '100%',
            railOpacity: 0.9
        });
    }
}