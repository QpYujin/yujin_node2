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
          start: '2017-08-01',
          color: '#00cc00'
        },
        {
          title: 'Long Event',
          start: '2017-08-13',
          end: '2017-08-15',
          color: '#00ccff'
        },
        {
          title: 'Kids Games',
          start: '2017-08-20',
          color: '#ffbf80'
        },

      ]
    };
  }
}
