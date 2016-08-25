    import { NgModule }      from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { FormsModule }   from '@angular/forms';
    import { wrapperComponent } from './components';
    @NgModule({
      imports: [
        BrowserModule,
        FormsModule
      ],
      declarations: [
        wrapperComponent
      ],
      bootstrap: [ wrapperComponent ]
    })
    export class AppModule { }