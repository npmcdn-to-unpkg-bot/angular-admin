import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { dynamicLoaderService } from '../services';
declare var $:any;
@Component({
  selector: 'form-advanced',
  templateUrl: 'app/formAdvanced/formAdvanced.html',
  styleUrls: ['../../admin/css/plugins/jasny/jasny-bootstrap.min.css']
})
export class formAdvanced implements OnDestroy, AfterViewInit{

    lastEvent: boolean = true;
    constructor(private _dynamicLoaderService:dynamicLoaderService){
        console.log("constructor"); 
        
    }
    ngOnDestroy(){
        this._dynamicLoaderService.destroyJs();
    }
    ngAfterViewInit(){
        
        
        

        
        
        
        
        
        
        this._dynamicLoaderService.loadJS(
            [ { link : 'js/plugins/chosen/chosen.jquery.js',
                function : function(){
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
                },
                removable : true
             },
             { link : 'js/plugins/jsKnob/jquery.knob.js',
                function : function(){
                    $(".dial").knob();
                },
                removable : true
             },
             { link : 'js/plugins/jasny/jasny-bootstrap.min.js',
                function : null,
                removable : true
             },
             { link : 'js/plugins/datapicker/bootstrap-datepicker.js',
                function : function(){
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
                },
                removable : true
             }
             
             ]
        );

    }
}