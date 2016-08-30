import { dynamicLoaderService } from './services';

export function OffSoftAdmin(annotation: any) {
  var _dynamicLoaderService:dynamicLoaderService = new dynamicLoaderService();
  return function (target: Function) {
    var parentTarget = Object.getPrototypeOf(target.prototype).constructor;
        target.prototype.metaJS = null;
        target.prototype.metaCSS = null;
        if(annotation.hasOwnProperty('css')){
            //_dynamicLoaderService.loadCss(annotation.css);
            target.prototype.metaCSS = annotation.css;
        }
        if(annotation.hasOwnProperty('js')){
            //_dynamicLoaderService.loadCss(annotation.css);
            target.prototype.metaJS = annotation.js;
        }
  };
}
