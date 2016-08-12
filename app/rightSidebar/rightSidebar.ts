import { Component, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'right-sidebar',
  templateUrl: 'app/rightSidebar/rightsidebar.html'
})
export class rightSidebar implements AfterViewInit{
    ngAfterViewInit(){
        $('.right-sidebar-toggle').click(function () {
            $('#right-sidebar').toggleClass('sidebar-open');
        });
        $('.sidebar-container').slimScroll({
            height: '100%',
            railOpacity: 0.4,
            wheelStep: 10
        });

    }
}