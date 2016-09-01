import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { dynamicLoaderService } from '../services';
import { OffSoftAdmin } from '../OffSoftAdmin';

declare var $:any;
declare var moment:any;
declare var Switchery:any;

@OffSoftAdmin({
    css:[{ link : 'css/plugins/ionRangeSlider/ion.rangeSlider.css',
        id:'ionRangeSliderCss',
        removable : true
    },
    {   link : 'css/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css',
        id:'ionRangeSliderskinFlatCss',
        removable : true
    },
    {   link : 'css/plugins/datapicker/datepicker3.css',
        id:'datepicker3Css',
        removable : true
    },
    {   link : 'css/plugins/clockpicker/clockpicker.css',
        id:'clockpickerCss',
        removable : true
    },
    {   link : 'css/plugins/chosen/chosen.css',
        id:'chosenCss',
        removable : true
    },
    {   link : 'css/plugins/touchspin/jquery.bootstrap-touchspin.min.css',
        id:'touchspinCss',
        removable : true
    },
    {   link : 'css/plugins/select2/select2.min.css',
        id:'select2Css',
        removable : true
    },
    {   link : 'css/plugins/nouslider/jquery.nouislider.css',
        id:'nouisliderCss',
        removable : true
    },
    {   link : 'css/plugins/daterangepicker/daterangepicker-bs3.css',
        id:'daterangepickerCss',
        removable : true
    },
    {   link : 'css/plugins/switchery/switchery.css',
        id:'switcheryCss',
        removable : true
    },
    {   link : 'css/plugins/colorpicker/bootstrap-colorpicker.min.css',
        id:'colorpickerCss',
        removable : true
    },
    {   link : 'css/plugins/cropper/cropper.min.css',
        id:'cropperCss',
        removable : true
    }]//
})
@Component({
  selector: 'form-advanced',
  templateUrl: 'app/formAdvanced/formAdvanced.html',
  styleUrls: ['../../admin/css/plugins/jasny/jasny-bootstrap.min.css']
})
export class formAdvanced implements OnDestroy, AfterViewInit{
    metaJS:any;
    metaCSS:any;
    lastEvent: boolean = true;
    constructor(private _dynamicLoaderService:dynamicLoaderService){
       _dynamicLoaderService.loadCss(this.metaCSS);
    }
    ngOnDestroy(){
        this._dynamicLoaderService.destroyJs();
    }
    ngAfterViewInit(){
        this._dynamicLoaderService.$loadJSEvent.subscribe(res=>{
            console.log("res  ",res);
            switch(res.id){
                case "chosen":
                    this.chosen();
                break;
                case "knob":
                    this.knob();
                break;
                case "ionRangeSlider":
                    this.ionRangeSlider();
                break;
                case "datepickerJS":
                    this.datepicker();
                break;
                case "clockpicker":
                    this.clockpicker();
                break;
                case "touchspinJS":
                    this.touchspin();
                break;
                case "select2JS":
                    this.select2JS();
                break;
                case "nouisliderJS":
                    this.nouisliderJS();
                break;
                case "daterangepickerJS":
                    this.daterangepickerJS();
                break;
                case "switcheryJS":
                    this.switcheryJS();
                break;
                case "colorpickerJS":
                    this.colorpickerJS();
                break;
                case "cropperJS":
                    this.cropperJS();
                break;
            }
        });
        
        
        this._dynamicLoaderService.loadJSEvent(
            [ { link : 'js/plugins/chosen/chosen.jquery.js',
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
                id:'jasny',
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
             },
             { link : 'js/plugins/datapicker/bootstrap-datepicker.js',
                id: 'datepickerJS',
                function : null,
                removable : true
             },
             { link : 'js/plugins/touchspin/jquery.bootstrap-touchspin.min.js',
                id: 'touchspinJS',
                function : null,
                removable : true
             },
             { link : 'js/plugins/select2/select2.full.min.js',
                id: 'select2JS',
                function : null,
                removable : true
             },
             { link : 'js/plugins/nouslider/jquery.nouislider.min.js',
                id: 'nouisliderJS',
                function : null,
                removable : true
             },
             { link : 'js/plugins/daterangepicker/daterangepicker.js',
                id: 'daterangepickerJS',
                function : null,
                removable : true
             },
             { link : 'js/plugins/switchery/switchery.js',
                id: 'switcheryJS',
                function : null,
                removable : true
             },
             { link : 'js/plugins/colorpicker/bootstrap-colorpicker.min.js',
                id: 'colorpickerJS',
                function : null,
                removable : true
             },
             { link : 'js/plugins/cropper/cropper.min.js',
                id: 'cropperJS',
                function : null,
                removable : true
             }
             
             ]
        );

    }
    cropperJS(){
        let $image = $(".image-crop > img")
        $($image).cropper({
            aspectRatio: 1.618,
            preview: ".img-preview",
            done: function(data) {
                // Output the result data for cropping image.
            }
        });
        let $inputImage = $("#inputImage");
        if (window.hasOwnProperty('FileReader')) {
                $inputImage.change(function() {
                    var fileReader = new FileReader(),
                            files = this.files,
                            file;

                    if (!files.length) {
                        return;
                    }

                    file = files[0];

                    if (/^image\/\w+$/.test(file.type)) {
                        fileReader.readAsDataURL(file);
                        fileReader.onload = function () {
                            $inputImage.val("");
                            $image.cropper("reset", true).cropper("replace", this.result);
                        };
                    } else {
                        showMessage("Please choose an image file.");
                    }
                });
            } else {
                $inputImage.addClass("hide");
            }
        $("#download").click(function() {
                window.open($image.cropper("getDataURL"));
            });

            $("#zoomIn").click(function() {
                $image.cropper("zoom", 0.1);
            });

            $("#zoomOut").click(function() {
                $image.cropper("zoom", -0.1);
            });

            $("#rotateLeft").click(function() {
                $image.cropper("rotate", 45);
            });

            $("#rotateRight").click(function() {
                $image.cropper("rotate", -45);
            });

            $("#setDrag").click(function() {
                $image.cropper("setDragMode", "crop");
            });
    }
    colorpickerJS(){
        $('.demo1').colorpicker();
        let divStyle = $('.back-change')[0].style;
        $('#demo_apidemo').colorpicker({
            color: divStyle.backgroundColor
        }).on('changeColor', function(ev) {
            divStyle.backgroundColor = ev.color.toHex();
        });
    }

    switcheryJS(){
        let elem = parent.document.querySelector('.js-switch');
        let switchery = new Switchery(elem, { color: '#1AB394' });

        let elem_2 = parent.document.querySelector('.js-switch_2');
        let switchery_2 = new Switchery(elem_2, { color: '#ED5565' });

        let elem_3 = parent.document.querySelector('.js-switch_3');
        let switchery_3 = new Switchery(elem_3, { color: '#1AB394' });
    }
    daterangepickerJS(){
        $('input[name="daterange"]').daterangepicker();
        $('#reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
        $('#reportrange').daterangepicker({
                format: 'MM/DD/YYYY',
                startDate: moment().subtract(29, 'days'),
                endDate: moment(),
                minDate: '01/01/2012',
                maxDate: '12/31/2015',
                dateLimit: { days: 60 },
                showDropdowns: true,
                showWeekNumbers: true,
                timePicker: false,
                timePickerIncrement: 1,
                timePicker12Hour: true,
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                },
                opens: 'right',
                drops: 'down',
                buttonClasses: ['btn', 'btn-sm'],
                applyClass: 'btn-primary',
                cancelClass: 'btn-default',
                separator: ' to ',
                locale: {
                    applyLabel: 'Submit',
                    cancelLabel: 'Cancel',
                    fromLabel: 'From',
                    toLabel: 'To',
                    customRangeLabel: 'Custom',
                    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
                    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    firstDay: 1
                }
            }, function(start, end, label) {
                console.log(start.toISOString(), end.toISOString(), label);
                $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            });

    }
    nouisliderJS(){
      $("#basic_slider").noUiSlider({
            start: 40,
            behaviour: 'tap',
            connect: 'upper',
            range: {
                'min':  20,
                'max':  80
            }
        });

        $("#range_slider").noUiSlider({
            start: [ 40, 60 ],
            behaviour: 'drag',
            connect: true,
            range: {
                'min':  20,
                'max':  80
            }
        });

        $("#drag-fixed").noUiSlider({
            start: [ 40, 60 ],
            behaviour: 'drag-fixed',
            connect: true,
            range: {
                'min':  20,
                'max':  80
            }
        });  
    }
    select2JS(){
        $(".select2_demo_1").select2();
        $(".select2_demo_2").select2();
        $(".select2_demo_3").select2({
            placeholder: "Select a state",
            allowClear: true
        });
    }
    touchspin(){
        $(".touchspin1").TouchSpin({
            buttondown_class: 'btn btn-white',
            buttonup_class: 'btn btn-white'
        });

        $(".touchspin2").TouchSpin({
            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            boostat: 5,
            maxboostedstep: 10,
            postfix: '%',
            buttondown_class: 'btn btn-white',
            buttonup_class: 'btn btn-white'
        });

        $(".touchspin3").TouchSpin({
            verticalbuttons: true,
            buttondown_class: 'btn btn-white',
            buttonup_class: 'btn btn-white'
        });
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
        
        console.log("datepicker js started");
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