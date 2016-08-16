import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';


@Component({
  selector: 'wrapper-component',
  directives: [ROUTER_DIRECTIVES],
  template: '<router-outlet></router-outlet>'
})
export class wrapperComponent {
    constructor(){
        
    }
}