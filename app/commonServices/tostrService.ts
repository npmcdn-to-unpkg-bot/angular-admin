import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

declare var toastr:any;

@Injectable()
export class tostrService {
  public $tostrServiceEvent:Subject<any> = new Subject<any>();
  
  constructor() {
      this.$tostrServiceEvent.subscribe((obj:any)=>{
        console.log("TostrServiceEvent Here ", obj);
        setTimeout(()=>{
            toastr.options = {
                closeButton: obj.closeButton,
                progressBar: obj.progressBar,
                showMethod: obj.showMethod,
                timeOut: obj.timeOut
            };
            toastr.success(obj.msgBold, obj.msgSimple);

        }, obj.finalTimeOut);
      });
  }
}

