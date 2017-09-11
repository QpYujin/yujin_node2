import {Injectable} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';

@Injectable()
export class CalendarService {
  todayDate:any;
  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    if(!this.todayDate) {
      this.todayDate = new Date();
    }
    let dashboardColors = this._baConfig.get().colors.dashboard;
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
      events: [
       
 {
          title: 'All Day Event',
          start: '2017-09-01',
          color: '#00cc00'
        },
        {
          title: 'Swimming Pool party',
          start: '2017-09-13',
          end: '2017-08-15',
          color: '#00ccff'
        },
        {
          title: 'Kids All Day Event',
          start: '2017-09-20',
          color: '#ffbf80'
        },
         {
          title: 'All Day Event',
          start: '2017-10-01',
          color: '#00cc00'
        },
        {
          title: 'Swimming Pool party',
          start: '2017-10-13',
          end: '2017-08-15',
          color: '#00ccff'
        },
        {
          title: 'Kids Games',
          start: '2017-10-20',
          color: '#ffbf80'
        },
      ]
    };
  }
}
