import { Injectable } from '@angular/core';
import { loginResponse } from '../classes';
@Injectable()
export class loginService {
  constructor() {
  }
  login(uName:string,pass:string):any{
    let _loginResponse:loginResponse = new loginResponse();  
    if (typeof uName == 'undefined' || uName == '' ||
        typeof pass == 'undefined' || pass == ''){
        _loginResponse.error = true;
        _loginResponse.errorStrings.push("Username & Password is required");
    }
    console.log('logg');
    return _loginResponse;
  }
}

