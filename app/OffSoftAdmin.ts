import { dynamicLoaderService } from './services';

export function OffSoftAdmin(annotation: any) {
  var _dynamicLoaderService:dynamicLoaderService = new dynamicLoaderService();
  return function (target: Function) {
    var parentTarget = Object.getPrototypeOf(target.prototype).constructor;
    
    
    
    console.log("_dynamicLoaderService",_dynamicLoaderService);
        if(annotation.hasOwnProperty('css')){
            _dynamicLoaderService.loadCss(annotation.css);
        }
        if(annotation.hasOwnProperty('js')){
            _dynamicLoaderService.loadJSEvent(annotation.js);
        }
  };
}
