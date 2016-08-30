import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class dynamicLoaderService {
  __startLink:string = '../../admin/';
  private ids:any = [];
  $loadJSEvent:EventEmitter<string> = new EventEmitter<string>();
  constructor() {
  }
  loadJS(url: Array<any>){
      
      console.log("loadJS",url);
      let _self = this;
      url.forEach(function(v, k){
        let source = _self.__startLink + v.link;  
        let scriptTag:any = document.createElement('script');
            if(v.removable) _self.ids.push(scriptTag.id = "script" + Math.random());
        scriptTag.src = source;
        scriptTag.onload = v.function;
        scriptTag.onreadystatechange = v.function;
        parent.document.head.appendChild(scriptTag);
      });
      

    };
    loadJSEvent(url: Array<any>){
      console.log("loadJS",url);
      let _self = this;
      
      url.forEach(function(v, k){
        let sent: number = 0;
        let source = _self.__startLink + v.link;  
        let scriptTag:any = document.createElement('script');
            if(v.removable) _self.ids.push(scriptTag.id = "script" + Math.random());
        scriptTag.src = source;
        scriptTag.onload = function(){
            sent = sent + 1;
            _self.$loadJSEvent.next({url:source,id:v.id,sent:sent});
        };
        scriptTag.onreadystatechange = function(){
            sent = sent + 1;
            _self.$loadJSEvent.next({url:source,id:scriptTag.id,sent:sent});
        };
        parent.document.head.appendChild(scriptTag);
        sent = 0;
      });
      

    };
    destroyCss(){
        this.ids.forEach(function(v){
            document.getElementById(v).remove();
        })
    }
    
    loadCss(url: Array<any>){
        console.log("loadCss",url); 
      let _self = this;
      url.forEach(function(v, k){
          
        let head  = document.getElementsByTagName('head')[0];
        let link  = document.createElement('link');
        if(v.removable) _self.ids.push(link.id = "link" + Math.random());
        let source = _self.__startLink + v.link;  
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = source;
        link.media = 'all';
        link.onload = v.function;
        head.appendChild(link);
      });
      

    };
    destroyJs(){
        this.ids.forEach(function(v){
            document.getElementById(v).remove();
        })
    }
}

