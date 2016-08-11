import { Component, AfterViewInit, OnInit } from '@angular/core';
import {leftSidebar, rightSidebar, smallChat, footerComponent, topNav, dashboardHeader, pageContent} from '../components'
import { Router } from '@angular/router';
import { tostrService } from '../services'
import {  loginService } from '../services'
declare var $:any;
var _directives:any = [
    leftSidebar, 
    rightSidebar, 
    smallChat, 
    footerComponent,
    dashboardHeader,
    pageContent,
    topNav
];



@Component({
  //selector: 'admin-component',
  templateUrl: 'app/app/landing.html',
  directives: _directives
})
export class AppComponent implements AfterViewInit, OnInit{
    data1: Array<any> = [
        [0,4],[1,8],[2,5],[3,10],[4,4],[5,16],[6,5],[7,11],[8,6],[9,11],[10,30],[11,10],[12,13],[13,4],[14,3],[15,3],[16,6]
    ];
    data2: Array<any> = [
        [0,1],[1,0],[2,2],[3,0],[4,1],[5,3],[6,1],[7,5],[8,2],[9,3],[10,2],[11,1],[12,0],[13,2],[14,8],[15,0],[16,0]
    ];
    doughnutData: Array<any> = [
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

    doughnutOptions:any = {
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 45, // This is 0 for Pie charts
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false
    };
    polarData: Array<any> = [
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

    polarOptions:any = {
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
    private ctxPolar = null;
    private ctxDoughnut = null;
    private DoughnutChart = null;
    private Polarchart = null;
    
    constructor(private _tostrService:tostrService, private _router: Router, private _loginService:loginService){
        console.log("_loginService.isLoggedIn()",_loginService.isLoggedIn());
        if(!_loginService.isLoggedIn()){
            setTimeout(()=>{
                this._router.navigate(['/']);
            },100);
        }
    }
    ngOnInit(){
        console.log("_loginService.isLoggedIn()",this._loginService.isLoggedIn());
    }
    ngAfterViewInit(){
        if(!this._loginService.isLoggedIn()) {
            this._tostrService.$tostrServiceEvent.next({ 
                closeButton : true,
                progressBar : true,
                showMethod : "slideDown",
                timeOut : 4000,
                msgBold : "Welcome",
                msgSimple : "Please Login To Enter",
                finalTimeOut : 1300
            });
            return;
        }
        this._tostrService.$tostrServiceEvent.next({ 
            closeButton : true,
            progressBar : true,
            showMethod : "slideDown",
            timeOut : 4000,
            msgBold : "Responsive Admin Theme",
            msgSimple : "Welcome to INSPINIA",
            finalTimeOut : 1300
        });

        let htmlElePolar:any = document.getElementById("polarChart");
        this.ctxPolar = htmlElePolar.getContext("2d");
        
        let htmlEleDoughnut:any = document.getElementById("doughnutChart");
        this.ctxDoughnut = htmlEleDoughnut.getContext("2d");
    }
}