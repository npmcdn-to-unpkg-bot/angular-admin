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
var components_1 = require('../components');
var router_1 = require('@angular/router');
var services_1 = require('../services');
var services_2 = require('../services');
var router_2 = require('@angular/router');
var _directives = [
    components_1.leftSidebar,
    components_1.rightSidebar,
    components_1.smallChat,
    components_1.footerComponent,
    router_2.ROUTER_DIRECTIVES,
    //dashboardHeader,
    //pageContent,
    components_1.dashboard,
    components_1.topNav
];
var AppComponent = (function () {
    function AppComponent(_tostrService, _router, _loginService) {
        this._tostrService = _tostrService;
        this._router = _router;
        this._loginService = _loginService;
        console.log("_loginService.isLoggedIn()", _loginService.isLoggedIn());
        if (!_loginService.isLoggedIn()) {
            setTimeout(function () {
                //this._router.navigate(['/']);
            }, 100);
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        this._loginService.__appHeight = parent.document.body.clientHeight;
        this._loginService.__appWidth = parent.document.body.clientWidth;
        if (parent.document.body.clientWidth < 769) {
            parent.document.body.classList.add('body-small');
        }
        else {
            parent.document.body.classList.remove('body-small');
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        if (!this._loginService.isLoggedIn()) {
            this._tostrService.$tostrServiceEvent.next({
                closeButton: true,
                progressBar: true,
                showMethod: "slideDown",
                timeOut: 4000,
                msgBold: "Welcome",
                msgSimple: "Please Login To Enter",
                finalTimeOut: 1300
            });
            return;
        }
        this._tostrService.$tostrServiceEvent.next({
            closeButton: true,
            progressBar: true,
            showMethod: "slideDown",
            timeOut: 4000,
            msgBold: "Responsive Admin Theme",
            msgSimple: "Welcome to INSPINIA",
            finalTimeOut: 1300
        });
    };
    AppComponent.prototype.onResize = function (e) {
        console.log("onResize ", e.target);
        if (parent.document.body.clientWidth < 769) {
            parent.document.body.classList.add('body-small');
        }
        else {
            parent.document.body.classList.remove('body-small');
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            //selector: 'admin-component',
            templateUrl: 'app/app/landing.html',
            directives: _directives
        }), 
        __metadata('design:paramtypes', [services_1.tostrService, router_1.Router, services_2.loginService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map