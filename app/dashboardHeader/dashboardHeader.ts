import { Component, OnInit, AfterViewInit } from '@angular/core';
import { data1, data2, doughnutData, doughnutOptions, polarData, polarOptions} from '../values';
declare var Chart:any;
declare var $:any;
@Component({
  selector: 'dashboard-header',
  templateUrl: 'app/dashboardHeader/dashboardHeader.html'
})
export class dashboardHeader implements OnInit,AfterViewInit {
    private ctxPolar = null;
    private ctxDoughnut = null;
    private DoughnutChart = null;
    private Polarchart = null;
    ngOnInit(){
        
    }
    ngAfterViewInit(){
        let htmlElePolar:any = document.getElementById("polarChart");
        this.ctxPolar = htmlElePolar.getContext("2d");
        this.Polarchart = new Chart(this.ctxPolar).PolarArea(polarData, polarOptions);
        
        let htmlEleDoughnut:any = document.getElementById("doughnutChart");
        this.ctxDoughnut = htmlEleDoughnut.getContext("2d");
        this.DoughnutChart = new Chart(this.ctxDoughnut).Doughnut(doughnutData, doughnutOptions);
        
        
        $("#flot-dashboard-chart").length && $.plot($("#flot-dashboard-chart"), [
                data1, data2
            ],
                    {
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
                        xaxis:{
                        },
                        yaxis: {
                            ticks: 4
                        },
                        tooltip: false
                    }
            );
    }
}