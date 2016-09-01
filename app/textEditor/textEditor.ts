import { Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import { OffSoftAdmin } from '../OffSoftAdmin';
import { dynamicLoaderService } from '../services';
declare var $:any;
declare var Dropzone:any;

@OffSoftAdmin({
    css:[{ link : 'css/plugins/summernote/summernote.css',
        id:'summernoteCss',
        removable : true
    },
    { link : 'css/plugins/summernote/summernote-bs3.css',
        id:'summernotebs3Css',
        removable : true
    }]
})

@Component({
  selector: 'text-editor',
  templateUrl: 'app/textEditor/textEditor.html'
})
export class textEditor implements OnDestroy, AfterViewInit {
    metaJS:any;
    metaCSS:any;
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
                case "summernoteJS":
                    this.summernoteJS();
                break;
            }
        });
        this._dynamicLoaderService.loadJSEvent(
            [{ link : 'js/plugins/summernote/summernote.min.js',
                id:'summernoteJS',
                function : null,
                removable : true
             }]
        );
    }
    summernoteJS(){
        console.log("summernoteJS");
        $('.summernote').summernote();
        
    }
    edit() {
            $('.click2edit').summernote({focus: true});
    };
    save() {
        var aHTML = $('.click2edit').code(); //save HTML If you need(aHTML: array).
        $('.click2edit').destroy();
    }
}