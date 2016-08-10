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
var services_1 = require('../services');
var _directives = [
    components_1.leftSidebar,
    components_1.rightSidebar,
    components_1.smallChat,
    components_1.footerComponent,
    components_1.dashboardHeader,
    components_1.pageContent,
    components_1.topNav
];
var AppComponent = (function () {
    function AppComponent(_tostrService) {
        this._tostrService = _tostrService;
        this.data1 = [
            [0, 4], [1, 8], [2, 5], [3, 10], [4, 4], [5, 16], [6, 5], [7, 11], [8, 6], [9, 11], [10, 30], [11, 10], [12, 13], [13, 4], [14, 3], [15, 3], [16, 6]
        ];
        this.data2 = [
            [0, 1], [1, 0], [2, 2], [3, 0], [4, 1], [5, 3], [6, 1], [7, 5], [8, 2], [9, 3], [10, 2], [11, 1], [12, 0], [13, 2], [14, 8], [15, 0], [16, 0]
        ];
        this.doughnutData = [
            {
                value: 300,
                color: "#a3e1d4",
                highlight: "#1ab394",
                label: "App"
            },
            {
                value: 50,
                color: "#dedede",
                highlight: "#1ab394",
                label: "Software"
            },
            {
                value: 100,
                color: "#A4CEE8",
                highlight: "#1ab394",
                label: "Laptop"
            }
        ];
        this.doughnutOptions = {
            segmentShowStroke: true,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            percentageInnerCutout: 45,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: true,
            animateScale: false
        };
        this.polarData = [
            {
                value: 300,
                color: "#a3e1d4",
                highlight: "#1ab394",
                label: "App"
            },
            {
                value: 140,
                color: "#dedede",
                highlight: "#1ab394",
                label: "Software"
            },
            {
                value: 200,
                color: "#A4CEE8",
                highlight: "#1ab394",
                label: "Laptop"
            }
        ];
        this.polarOptions = {
            scaleShowLabelBackdrop: true,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBeginAtZero: true,
            scaleBackdropPaddingY: 1,
            scaleBackdropPaddingX: 1,
            scaleShowLine: true,
            segmentShowStroke: true,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: true,
            animateScale: false
        };
        this.ctxPolar = null;
        this.ctxDoughnut = null;
        this.DoughnutChart = null;
        this.Polarchart = null;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this._tostrService.$tostrServiceEvent.next({
            closeButton: true,
            progressBar: true,
            showMethod: "slideDown",
            timeOut: 4000,
            msgBold: "Responsive Admin Theme",
            msgSimple: "Welcome to INSPINIA",
            finalTimeOut: 1300
        });
        var htmlElePolar = document.getElementById("polarChart");
        this.ctxPolar = htmlElePolar.getContext("2d");
        var htmlEleDoughnut = document.getElementById("doughnutChart");
        this.ctxDoughnut = htmlEleDoughnut.getContext("2d");
    };
    AppComponent = __decorate([
        core_1.Component({
            //selector: 'admin-component',
            templateUrl: 'app/app/landing.html',
            directives: _directives,
            providers: [services_1.tostrService]
        }), 
        __metadata('design:paramtypes', [services_1.tostrService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map