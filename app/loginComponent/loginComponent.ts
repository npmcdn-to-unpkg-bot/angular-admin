import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
@Component({
  //selector: 'login-component',
  //templateUrl: 'app/loginComponent/loginComponent.html'
  templateUrl: 'app/loginComponent/test.html',
  directives: [ROUTER_DIRECTIVES]  
})
export class loginComponent {
    constructor(private _router: Router){
        //_router.navigate(['application'])
    }
}