"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var services_1 = require('../services');
var loginComponent = (function () {
    function loginComponent(_router, _loginService) {
        this._router = _router;
        this._loginService = _loginService;
        this.loginModel = {
            user: "", pass: ""
        };
        this.loginModel.user = "";
        this.loginModel.pass = "";
        //$("body").addClass("gray-bg");
        parent.document.body.classList.add("gray-bg");
        //_router.navigate(['application']);
        console.log(_loginService.login("", ""));
    }
    loginComponent.prototype.ngOnDestroy = function () {
        //$("body").removeClass("gray-bg");
        parent.document.body.className = parent.document.body.className.replace("gray-bg", "");
    };
    loginComponent.prototype.loginApp = function () {
        var _this = this;
        console.log("loginModel ", this.loginModel);
        var __loginResponse = this._loginService.login(this.loginModel.user, this.loginModel.pass);
        console.log(__loginResponse);
        if (__loginResponse.result) {
            setTimeout(function () {
                _this._router.navigate(['/application']);
            }, 100);
        }
    };
    loginComponent = __decorate([
        core_1.Component({
            //selector: 'login-component',
            templateUrl: 'app/loginComponent/loginComponent.html',
            //templateUrl: 'app/loginComponent/test.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router, services_1.loginService])
    ], loginComponent);
    return loginComponent;
}());
exports.loginComponent = loginComponent;
//# sourceMappingURL=loginComponent.js.map