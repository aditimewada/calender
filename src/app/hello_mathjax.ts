import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {CalendarComponent} from "angular2-fullcalendar/src/calendar/calendar";
// import {MathJax} from 'mathjax/MathJax.js';
declare var MathJax:any;
@Component({
  selector: 'hello-mathjax',
  templateUrl: 'hello_mathjax.html',
  styleUrls: ['../../node_modules/fullcalendar/dist/fullcalendar.min.css']
})
export class HelloMathjax {

  viewDate: Date = new Date();
  events = [];

  calendarOptions:Object = {
    height: 'parent',
    fixedWeekCount : false,
    defaultDate: '2016-09-12',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2016-09-01'
      },
      {
        title: 'Long Event',
        start: '2016-09-07',
        end: '2016-09-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2016-09-11',
        end: '2016-09-13'
      },
      {
        title: 'Meeting',
        start: '2016-09-12T10:30:00',
        end: '2016-09-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2016-09-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2016-09-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2016-09-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2016-09-12T20:00:00'
      },
      {
        title: 'Party',
        start: '2016-09-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2016-09-28'
      }
    ]
  };

    fractionString: string = 'Inside Angular one half = $\\frac 12$';
    testValue : string = ' ';
    @ViewChild(CalendarComponent) myCalendar: CalendarComponent;
    
     changeCalendarView(view) {
       this.myCalendar.fullCalendar('changeView', view);
     }
    
    @ViewChild('result') result : ElementRef;
  
    constructor() { }
    
    ngOnInit() {
        //MathJax.Hub.Queue(["Typeset",MathJax.Hub,"MathJax"]);
        console.log("init");
    }
    
    updateResult () {
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.result.nativeElement]);
    // MathJax.Hub.Queue(["Typeset", MathJax.Hub," "]);
    }
    
}
