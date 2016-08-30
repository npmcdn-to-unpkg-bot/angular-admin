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
var values_1 = require('../values');
var dashboardHeader = (function () {
    function dashboardHeader() {
        this.ctxPolar = null;
        this.ctxDoughnut = null;
        this.DoughnutChart = null;
        this.Polarchart = null;
    }
    dashboardHeader.prototype.ngOnInit = function () {
    };
    dashboardHeader.prototype.ngAfterViewInit = function () {
        var htmlElePolar = document.getElementById("polarChart");
        this.ctxPolar = htmlElePolar.getContext("2d");
        this.Polarchart = new Chart(this.ctxPolar).PolarArea(values_1.polarData, values_1.polarOptions);
        var htmlEleDoughnut = document.getElementById("doughnutChart");
        this.ctxDoughnut = htmlEleDoughnut.getContext("2d");
        this.DoughnutChart = new Chart(this.ctxDoughnut).Doughnut(values_1.doughnutData, values_1.doughnutOptions);
        $("#flot-dashboard-chart").length && $.plot($("#flot-dashboard-chart"), [
            values_1.data1, values_1.data2
        ], {
            series: {
                lines: {
                    show: false,
                    fill: true
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.4
                },
                points: {
                    radius: 0,
                    show: true
                },
                shadowSize: 2
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#d5d5d5",
                borderWidth: 1,
                color: '#d5d5d5'
            },
            colors: ["#1ab394", "#1C84C6"],
            xaxis: {},
            yaxis: {
                ticks: 4
            },
            tooltip: false
        });
    };
    dashboardHeader = __decorate([
        core_1.Component({
            selector: 'dashboard-header',
            templateUrl: 'app/dashboardHeader/dashboardHeader.html'
        }), 
        __metadata('design:paramtypes', [])
    ], dashboardHeader);
    return dashboardHeader;
}());
exports.dashboardHeader = dashboardHeader;
//# sourceMappingURL=dashboardHeader.js.map