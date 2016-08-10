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
var smallChat = (function () {
    function smallChat() {
    }
    smallChat.prototype.ngAfterViewInit = function () {
        $('.open-small-chat').click(function () {
            $(this).children().toggleClass('fa-comments').toggleClass('fa-remove');
            $('.small-chat-box').toggleClass('active');
        });
        // Initialize slimscroll for small chat
        $('.small-chat-box .content').slimScroll({
            height: '234px',
            railOpacity: 0.4
        });
        // Small todo handler
        $('.check-link').click(function () {
            var button = $(this).find('i');
            var label = $(this).next('span');
            button.toggleClass('fa-check-square').toggleClass('fa-square-o');
            label.toggleClass('todo-completed');
            return false;
        });
    };
    smallChat = __decorate([
        core_1.Component({
            selector: 'small-chat',
            templateUrl: 'app/smallChat/smallchat.html'
        }), 
        __metadata('design:paramtypes', [])
    ], smallChat);
    return smallChat;
}());
exports.smallChat = smallChat;
//# sourceMappingURL=smallChat.js.map