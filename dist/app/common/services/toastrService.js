"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var toastrService = (function () {
    function toastrService() {
        this._timeOut = 1300;
        this._timeOutGo = 4000;
        this._closeButton = true;
        this._progressBar = true;
        this._showMethod = 'slideDown';
        this._messageBold = 'Responsive Admin Theme';
        this._messageSimple = 'Welcome to INSPINIA';
        this.toastrEvent = new core_1.EventEmitter();
    }
    toastrService.prototype.setToastr = function () {
        var _this = this;
        setTimeout(function () {
            toastr.options = {
                closeButton: _this._closeButton,
                progressBar: _this._progressBar,
                showMethod: _this._showMethod,
                timeOut: _this._timeOutGo
            };
            toastr.success(_this._messageBold, _this._messageSimple);
        }, this._timeOut);
    };
    toastrService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], toastrService);
    return toastrService;
}());
exports.toastrService = toastrService;
//# sourceMappingURL=toastrService.js.map