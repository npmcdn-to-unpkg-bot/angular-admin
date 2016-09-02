import { Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import { OffSoftAdmin } from '../OffSoftAdmin';
import { dynamicLoaderService } from '../services';


@OffSoftAdmin({
    css:[{ link : 'css/plugins/bootstrap-markdown/bootstrap-markdown.min.css',
        id:'markdownCss',
        removable : true
    }]
})

@Component({
  selector: 'mark-down',
  templateUrl: 'app/markDown/markDown.html'
})
export class markDown implements OnDestroy, AfterViewInit {
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
                case "bootstrapmarkdownJS":
                    this.bootstrapmarkdownJS();
                break;
                case "markdownJS":
                    this.markdownJS();
                break;
            }
        });
        this._dynamicLoaderService.loadJSEvent(
            [{ link : 'js/plugins/bootstrap-markdown/bootstrap-markdown.js',
                id:'bootstrapmarkdownJS',
                function : null,
                removable : true
             },
             { link : 'js/plugins/bootstrap-markdown/markdown.js',
                id:'markdownJS',
                function : null,
                removable : true
             }]
        );
    }
    bootstrapmarkdownJS(){
        this._dynamicLoaderService.loadJSEvent(
            [{ link : 'js/plugins/bootstrap-markdown/markdown.js',
                id:'markdownJS',
                function : null,
                removable : true
             }]
        );
    }
    markdownJS(){
        

    }    
}