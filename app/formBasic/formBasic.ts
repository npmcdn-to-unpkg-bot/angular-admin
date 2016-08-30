import { Component, OnInit, OnDestroy } from '@angular/core';
import { dynamicLoaderService } from '../services';
declare var $:any;


@Component({
  selector: 'form-basic',
  templateUrl: 'app/formBasic/formBasic.html'
})
export class formBasic implements OnInit, OnDestroy {
    constructor(private _dynamicLoaderService:dynamicLoaderService){
    }
    ngOnDestroy(){
        this._dynamicLoaderService.destroyJs();
    }
    ngOnInit(){
        this._dynamicLoaderService.loadJS(
            [ { link : 'js/plugins/iCheck/icheck.min.js',
                id:'iCheck',
                function : function(){
                     $('.i-checks').iCheck({
                         checkboxClass: 'icheckbox_square-green',
                         radioClass: 'iradio_square-green',
                     });
                 },
                 removable : true
             }]
        );
    }
}
