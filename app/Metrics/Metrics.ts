import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { dynamicLoaderService } from '../services';

declare var $:any;

@Component({
  selector: 'Metrics-Compo',
  templateUrl: 'app/Metrics/Metrics.html'
})
export class Metrics implements OnDestroy, AfterViewInit{
    
    constructor(private _dynamicLoaderService:dynamicLoaderService){
       
    }
    ngOnDestroy(){
        this._dynamicLoaderService.destroyJs();
    }
    ngAfterViewInit(){
        this._dynamicLoaderService.$loadJSEvent.subscribe(res=>{
            console.log("res  ",res);
            switch(res.id){
                case "peityJS":
                    this.peityJS();
                break;
//                case "peityDemoJS":
//                    this.peityDemoJS();
//                break;
            }
        });
        
        
        this._dynamicLoaderService.loadJSEvent(
            [ { link : 'js/plugins/peity/jquery.peity.min.js',
                id:'peityJS',
                function : null,
                removable : true
             }]
        );

    }
    peityJS(){
       this.peityDemoJS(); 
    }
    peityDemoJS(){
        $("span.pie").peity("pie", {
            fill: ['#1ab394', '#d7d7d7', '#ffffff']
        })

        $(".line").peity("line",{
            fill: '#1ab394',
            stroke:'#169c81',
        })

        $(".bar").peity("bar", {
            fill: ["#1ab394", "#d7d7d7"]
        })

        $(".bar_dashboard").peity("bar", {
            fill: ["#1ab394", "#d7d7d7"],
            width:100
        })
        let updatingChart = $(".updating-chart").peity("line", { fill: '#1ab394',stroke:'#169c81', width: 64 });
        setInterval(()=>{
            let random = Math.round(Math.random() * 10)
            let values = updatingChart.text().split(",");
            values.shift();
            values.push(random);
            updatingChart
                .text(values.join(","))
                .change()
        },1000);
        
        $("#sparkline1").sparkline([34, 43, 43, 35, 44, 32, 44, 52], {
           type: 'line',
           width: '100%',
           height: '60',
           lineColor: '#1ab394',
           fillColor: "#ffffff"
       });

       $("#sparkline2").sparkline([24, 43, 43, 55, 44, 62, 44, 72], {
           type: 'line',
           width: '100%',
           height: '60',
           lineColor: '#1ab394',
           fillColor: "#ffffff"
       });

       $("#sparkline3").sparkline([74, 43, 23, 55, 54, 32, 24, 12], {
           type: 'line',
           width: '100%',
           height: '60',
           lineColor: '#ed5565',
           fillColor: "#ffffff"
       });

       $("#sparkline4").sparkline([24, 43, 33, 55, 64, 72, 44, 22], {
           type: 'line',
           width: '100%',
           height: '60',
           lineColor: '#ed5565',
           fillColor: "#ffffff"
       });

       $("#sparkline5").sparkline([1, 4], {
           type: 'pie',
           height: '140',
           sliceColors: ['#1ab394', '#F5F5F5']
       });

       $("#sparkline6").sparkline([5, 3], {
           type: 'pie',
           height: '140',
           sliceColors: ['#1ab394', '#F5F5F5']
       });

       $("#sparkline7").sparkline([2, 2], {
           type: 'pie',
           height: '140',
           sliceColors: ['#ed5565', '#F5F5F5']
       });

       $("#sparkline8").sparkline([2, 3], {
           type: 'pie',
           height: '140',
           sliceColors: ['#ed5565', '#F5F5F5']
       });
    }
}