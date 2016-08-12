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
var topNav = (function () {
    function topNav() {
    }
    topNav.prototype.minimalizeFunction = function () {
        console.log('minimalizeFunction');
        $("body").toggleClass("mini-navbar");
        this.SmoothlyMenu();
    };
    topNav.prototype.SmoothlyMenu = function () {
        var miniNavbar = parent.document.body.classList.contains('mini-navbar');
        var bodySmall = parent.document.body.classList.contains('body-small');
        if (!miniNavbar || bodySmall) {
            // Hide menu in order to smoothly turn on when maximize menu
            $('#side-menu').hide();
            // For smoothly turn on menu
            setTimeout(function () {
                $('#side-menu').fadeIn(400);
            }, 200);
        }
        else if (parent.document.body.classList.contains('fixed-sidebar')) {
            $('#side-menu').hide();
            setTimeout(function () {
                $('#side-menu').fadeIn(400);
            }, 100);
        }
        else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            $('#side-menu').removeAttr('style');
        }
    };
    topNav = __decorate([
        core_1.Component({
            selector: 'nav-component',
            templateUrl: 'app/topNav/topNav.html'
        }), 
        __metadata('design:paramtypes', [])
    ], topNav);
    return topNav;
}());
exports.topNav = topNav;
//# sourceMappingURL=topNav.js.map