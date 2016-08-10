import { Component, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'small-chat',
  templateUrl: 'app/smallChat/smallchat.html'
})
export class smallChat implements AfterViewInit{
    ngAfterViewInit(){
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

    }
}