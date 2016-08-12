import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'nav-component',
  templateUrl: 'app/topNav/topNav.html'
})
export class topNav {
    minimalizeFunction(){
        console.log('minimalizeFunction');
        $("body").toggleClass("mini-navbar");
        this.SmoothlyMenu();
    }
    SmoothlyMenu() {
        let miniNavbar = parent.document.body.classList.contains('mini-navbar');
        let bodySmall = parent.document.body.classList.contains('body-small');
        if (!miniNavbar || bodySmall) {
            // Hide menu in order to smoothly turn on when maximize menu
            $('#side-menu').hide();
            // For smoothly turn on menu
            setTimeout(
                ()=> {
                    $('#side-menu').fadeIn(400);
                }, 200);
        } else if (parent.document.body.classList.contains('fixed-sidebar')) {
            $('#side-menu').hide();
            setTimeout(
                ()=> {
                    $('#side-menu').fadeIn(400);
                }, 100);
        } else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            $('#side-menu').removeAttr('style');
        }
    }
}