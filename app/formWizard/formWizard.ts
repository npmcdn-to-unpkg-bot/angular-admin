import { Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import { OffSoftAdmin } from '../OffSoftAdmin';
import { dynamicLoaderService } from '../services';
declare var $:any;

@OffSoftAdmin({
    css:[{ link : 'css/plugins/steps/jquery.steps.css',
        id:'stepsCss',
        removable : true
    }]
})

@Component({
  selector: 'form-wizard',
  templateUrl: 'app/formWizard/formWizard.html'
})
export class formWizard implements OnDestroy, AfterViewInit {
    metaJS:any;
    metaCSS:any;
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
                case "validateJS":
                    this.validateJS();
                break;
                case "stepsJS":
                    this.stepsJS();
                break;
            }
        });
        this._dynamicLoaderService.loadJSEvent(
            [{ link : 'js/plugins/staps/jquery.steps.min.js',
                id:'stepsJS',
                function : null,
                removable : true
             }]
        );
    }
    stepsJS(){
        this._dynamicLoaderService.loadJSEvent(
            [{ link : 'js/plugins/validate/jquery.validate.min.js',
                id:'validateJS',
                function : null,
                removable : true
             }]
        );
    }
    validateJS(){
            $("#wizard").steps();
            $("#form").steps({
                bodyTag: "fieldset",
                onStepChanging: function (event, currentIndex, newIndex)
                {
                    // Always allow going backward even if the current step contains invalid fields!
                    if (currentIndex > newIndex)
                    {
                        return true;
                    }

                    // Forbid suppressing "Warning" step if the user is to young
                    if (newIndex === 3 && Number($("#age").val()) < 18)
                    {
                        return false;
                    }

                    var form = $(this);

                    // Clean up if user went backward before
                    if (currentIndex < newIndex)
                    {
                        // To remove error styles
                        $(".body:eq(" + newIndex + ") label.error", form).remove();
                        $(".body:eq(" + newIndex + ") .error", form).removeClass("error");
                    }

                    // Disable validation on fields that are disabled or hidden.
                    form.validate().settings.ignore = ":disabled,:hidden";

                    // Start validation; Prevent going forward if false
                    return form.valid();
                },
                onStepChanged: function (event, currentIndex, priorIndex)
                {
                    // Suppress (skip) "Warning" step if the user is old enough.
                    if (currentIndex === 2 && Number($("#age").val()) >= 18)
                    {
                        $(this).steps("next");
                    }

                    // Suppress (skip) "Warning" step if the user is old enough and wants to the previous step.
                    if (currentIndex === 2 && priorIndex === 3)
                    {
                        $(this).steps("previous");
                    }
                },
                onFinishing: function (event, currentIndex)
                {
                    var form = $(this);

                    // Disable validation on fields that are disabled.
                    // At this point it's recommended to do an overall check (mean ignoring only disabled fields)
                    form.validate().settings.ignore = ":disabled";

                    // Start validation; Prevent form submission if false
                    return form.valid();
                },
                onFinished: function (event, currentIndex)
                {
                    var form = $(this);

                    // Submit form input
                    form.submit();
                }
            }).validate({
                errorPlacement: function (error, element)
                {
                    element.before(error);
                },
                rules: {
                    confirm: {
                        equalTo: "#password"
                    }
                }
            });

    }
}