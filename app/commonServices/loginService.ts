import { Injectable } from '@angular/core';
import { loginResponse } from '../classes';
@Injectable()
export class loginService {
  private __loginResult: boolean = false;
  constructor() {
  }
  isLoggedIn(){
      return this.__loginResult;
  }
  login(uName:string,pass:string):any{
    let _loginResponse:loginResponse = new loginResponse();  
    if (typeof uName == 'undefined' || uName == '' ||
        typeof pass == 'undefined' || pass == ''){
        _loginResponse.result = false;
        _loginResponse.error = true;
        _loginResponse.errorStrings.push("Username & Password is required");
    }
    if(uName=="demo" && pass=="demo"){
        this.__loginResult = true;
        _loginResponse.result = true;
        _loginResponse.error = false;
        _loginResponse.errorStrings.push("");
    }
    
    return _loginResponse;
  }
}

