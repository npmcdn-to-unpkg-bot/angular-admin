import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { dynamicLoaderService } from '../services';
import { OffSoftAdmin } from '../OffSoftAdmin';

declare var $:any;
@OffSoftAdmin({
    css:    [{ link : 'css/plugins/ionRangeSlider/ion.rangeSlider.css',
                id:'ionRangeSliderCss',
                removable : true
            },
            {   link : 'css/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css',
                id:'ionRangeSliderskinFlatCss',
                removable : true
            },
            {   link : 'css/plugins/datapicker/datepicker3.css',
                id:'ionRangeSliderskinFlatCss',
                removable : true
            },
            {   link : 'css/plugins/clockpicker/clockpicker.css',
                id:'clockpickerCss',
                removable : true
            }],
    js:     [ { link : 'js/plugins/chosen/chosen.jquery.js',
                id:'chosen',
                function : null,
                removable : true
             },
             { link : 'js/plugins/jsKnob/jquery.knob.js',
                id:'knob',
                function : null,
                removable : true
             },
             { link : 'js/plugins/jasny/jasny-bootstrap.min.js',
                function : null,
                removable : true
             },
             { link : 'js/plugins/datapicker/bootstrap-datepicker.js',
                id: 'datepicker',
                function : null,
                removable : true
             },
             { link : 'js/plugins/ionRangeSlider/ion.rangeSlider.min.js',
                id: 'ionRangeSlider',
                function : null,
                removable : true
             },
             { link : 'js/plugins/clockpicker/clockpicker.js',
                id: 'clockpicker',
                function : null,
                removable : true
             }]   
})
@Component({
  selector: 'form-advanced',
  templateUrl: 'app/formAdvanced/formAdvanced.html',
  styleUrls: ['../../admin/css/plugins/jasny/jasny-bootstrap.min.css']
})
export class formAdvanced implements OnDestroy, AfterViewInit{

    lastEvent: boolean = true;
    constructor(private _dynamicLoaderService:dynamicLoaderService){
    }
    ngOnDestroy(){
        this._dynamicLoaderService.destroyJs();
    }
    
    ngAfterViewInit(){
                    this.chosen();
                    this.knob();
                    this.datepicker();
                    this.ionRangeSlider();
                    this.datepicker();
                    this.clockpicker();
    }
    knob(){
        $(".dial").knob();
    }
    chosen(){
        let config:any = {
            '.chosen-select'           : {},
            '.chosen-select-deselect'  : {allow_single_deselect:true},
            '.chosen-select-no-single' : {disable_search_threshold:10},
            '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
            '.chosen-select-width'     : {width:"95%"}
        }
        for (var selector in config) {
            $(selector).chosen(config[selector]);
        }
    }
    datepicker(){
        $('#data_1 .input-group.date').datepicker({
            todayBtn: "linked",
            keyboardNavigation: false,
            forceParse: false,
            calendarWeeks: true,
            autoclose: true
        });

        $('#data_2 .input-group.date').datepicker({
            startView: 1,
            todayBtn: "linked",
            keyboardNavigation: false,
            forceParse: false,
            autoclose: true,
            format: "dd/mm/yyyy"
        });

        $('#data_3 .input-group.date').datepicker({
            startView: 2,
            todayBtn: "linked",
            keyboardNavigation: false,
            forceParse: false,
            autoclose: true
        });

        $('#data_4 .input-group.date').datepicker({
            minViewMode: 1,
            keyboardNavigation: false,
            forceParse: false,
            autoclose: true,
            todayHighlight: true
        });

        $('#data_5 .input-daterange').datepicker({
            keyboardNavigation: false,
            forceParse: false,
            autoclose: true
        });

    }
    ionRangeSlider(){
         $("#ionrange_1").ionRangeSlider({
            min: 0,
            max: 5000,
            type: 'double',
            prefix: "$",
            maxPostfix: "+",
            prettify: false,
            hasGrid: true
        });

        $("#ionrange_2").ionRangeSlider({
            min: 0,
            max: 10,
            type: 'single',
            step: 0.1,
            postfix: " carats",
            prettify: false,
            hasGrid: true
        });

        $("#ionrange_3").ionRangeSlider({
            min: -50,
            max: 50,
            from: 0,
            postfix: "°",
            prettify: false,
            hasGrid: true
        });

        $("#ionrange_4").ionRangeSlider({
            values: [
                "January", "February", "March",
                "April", "May", "June",
                "July", "August", "September",
                "October", "November", "December"
            ],
            type: 'single',
            hasGrid: true
        });

        $("#ionrange_5").ionRangeSlider({
            min: 10000,
            max: 100000,
            step: 100,
            postfix: " km",
            from: 55000,
            hideMinMax: true,
            hideFromTo: false
        });
   }
   clockpicker(){
       $('.clockpicker').clockpicker();
   }
}