import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CalendarComponent} from "angular2-fullcalendar/src/calendar/calendar";
// import {MathJax} from 'mathjax/MathJax.js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';


import { AppComponent } from './app.component';
import {MathJaxDirective} from './mathjax.directive';
import {HelloMathjax} from './hello_mathjax';
// import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,MathJaxDirective,HelloMathjax,CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap:[HelloMathjax]
})
export class AppModule { }
