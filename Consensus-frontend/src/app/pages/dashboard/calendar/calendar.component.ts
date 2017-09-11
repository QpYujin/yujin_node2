import {Component,OnInit} from '@angular/core';
import * as jQuery from 'jquery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../shared/formValidation/validation.service';
import {CalendarService} from './calendar.service';

import {CommunityService} from '../../../../restApi/community.services';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.scss']
})
export class Calendar implements OnInit{

  public calendarConfiguration:any;
  private _calendar:Object;event:any;public events=[]; todayDate: any;
  isValid:Boolean;
  public addEventForm={
    "isShowed" : false,
    "event_start" : "",
    "event_end" : "",
    "tenants" : "",
    "amenity" : "",
    "description" : ""
  };
  constructor(private _calendarService:CalendarService,
              public communityService: CommunityService,
            private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    console.log("in ngOnInit");
    this.delete();
  /*  this.communityService.getCommunitiesEvents()
      .then(data => {
        this.event = data;

        for(var  i =0;i <this.event.length;i++){
          this.events.push({'title':this.event[i].title,'start':this.event[i].start,'end':this.event[i].end})
          console.log("Titles are here"+this.events[i].title);

        }


      });

    console.log("in the constructor "+this.events);
    this.calendarConfiguration = this._calendarService.getData();
    this.calendarConfiguration.select = (start, end) => this._onSelect(start, end);

*/

    };

  delete(){
    this.communityService.getCommunitiesEvents().then(
      data => {
        this.event = data;
        console.log(this.event);
        for(var  i =0;i <this.event.length;i++){
          this.events.push({'title':this.event[i].title,'start':this.event[i].start,'end':this.event[i].end})
          console.log("Titles are here"+this.events[i].title);

        }
        console.log("in the constructor "+this.events);

        //this.refresh() doesn't work here.

      });
    this.calendarConfiguration = this._calendarService.getData();
    this.calendarConfiguration.select = (start, end) => this._onSelect(start, end);

  }


  getData() {
    if(!this.todayDate) {
      this.todayDate = new Date();
    }
    console.log("picked month"+JSON.stringify(this.events));
    //let dashboardColors = this._baConfig.get().colors.dashboard;
    return {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: this.todayDate,
      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true,
      events:this.events
    };
  }

  public onCalendarReady(calendar):void {
    this._calendar = calendar;
  }

  private _onCloseAddEvent(){
    this.addEventForm.isShowed = false;
  }

  private _onSelect(start, end):void {

    if (this._calendar != null) {
      this.addEventForm.isShowed = true;
      // let title = prompt('Event Title:');
      // let eventData;
      // if (title) {
      //   eventData = {
      //     title: title,
      //     start: start,
      //     end: end
      //   };
      //
      //   this.communityService.addCommunityEvents(eventData).then(() => {
      //
      //   });
      //   jQuery(this._calendar).fullCalendar('renderEvent', eventData, true);
      // }
      // jQuery(this._calendar).fullCalendar('unselect');
    }
  }
}
