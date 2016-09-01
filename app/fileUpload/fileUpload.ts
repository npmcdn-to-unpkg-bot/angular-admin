import { Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import { OffSoftAdmin } from '../OffSoftAdmin';
import { dynamicLoaderService } from '../services';
declare var $:any;
declare var Dropzone:any;

@OffSoftAdmin({
    css:[{ link : 'css/plugins/dropzone/basic.css',
        id:'dropzonebasicCss',
        removable : true
    },
    { link : 'css/plugins/dropzone/dropzone.css',
        id:'dropzoneCss',
        removable : true
    }]
})
@Component({
  selector: 'file-upload',
  templateUrl: 'app/fileUpload/fileUpload.html'
})
export class fileUpload implements OnDestroy, AfterViewInit {
    metaJS:any;
    metaCSS:any;
    myDropzone:any;
    constructor(private _dynamicLoaderService:dynamicLoaderService){
        _dynamicLoaderService.loadCss(this.metaCSS);
    }
    ngOnDestroy(){
        this._dynamicLoaderService.destroyJs();
    }
    ngAfterViewInit(){
        console.log("Dropzone");
        this._dynamicLoaderService.$loadJSEvent.subscribe(res=>{
            console.log("res  ",res);
            switch(res.id){
                case "dropzoneJS":
                    this.dropzoneJS();
                break;
            }
        });
        this._dynamicLoaderService.loadJSEvent(
            [{ link : 'js/plugins/dropzone/dropzone.js',
                id:'dropzoneJS',
                function : null,
                removable : true
             }]
        );
    }
    dropzoneJS(){
        //console.log("Dropzone",Dropzone);
        Dropzone.options.myAwesomeDropzone = {

                autoProcessQueue: false,
                uploadMultiple: true,
                parallelUploads: 100,
                maxFiles: 100,

                // Dropzone settings
                init: function() {
                    //let myDropzone = this;
                    console.log("myDropzone");    
//                    $("button[type=submit]").addEventListener("click", function(e) {
//                        alert("sss");
//                        e.preventDefault();
//                        e.stopPropagation();
//                        myDropzone.processQueue();
//                    });
                    this.on("sendingmultiple", function() {
                    });
                    this.on("successmultiple", function(files, response) {
                    });
                    this.on("errormultiple", function(files, response) {
                    });
                }

            }
            this.myDropzone = Dropzone;
    
    }
    clickSubmit(e){
        
        alert("Not Working");
        return false;
//        e.preventDefault();
//        e.stopPropagation();
//        Dropzone.prototype.processQueue();
    }
}