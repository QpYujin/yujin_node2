import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';



import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { AgmCoreModule } from '@agm/core';

import {MomentModule} from 'angular2-moment/moment.module';

import { PopularApp } from './popularApp';
import { PieChart } from './pieChart';
import { TrafficChart } from './trafficChart';
import { ChartsModule } from 'ng2-charts';
import { UsersMap } from './usersMap';
import { LineChart } from './lineChart';
import { Feed } from './feed';
import { Todo } from './todo';
import { Calendar } from './calendar';
import { CalendarService } from './calendar/calendar.service';
import { FeedService } from './feed/feed.service';
import { LineChartService } from './lineChart/lineChart.service';
import { PieChartService } from './pieChart/pieChart.service';
import { TodoService } from './todo/todo.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';
import { UsersMapService } from './usersMap/usersMap.service';
// import { GoogleMaps } from '../maps/components/googleMaps/googleMaps.component';
//import {BubbleMapsService} from '../maps/components/bubbleMaps/bubbleMaps.service';
//import {BubbleMaps} from '../maps/components/bubbleMaps/bubbleMaps.component';
import {TenantService} from '../../../restApi/tetants.services'

import {CommunityService} from '../../../restApi/community.services'
import {NewUserService} from '../../../restApi/newUsers.services'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MomentModule,
    ChartsModule,
    AppTranslationModule,
    NgaModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB-59QEf0Y6j_EBoOxRBp0HM8dJ3PZ0mGg',
      libraries: ["places"]
    })
  ],
  declarations: [
    PopularApp,
    PieChart,
    TrafficChart,
    UsersMap,
    LineChart,
    Feed,
    Todo,
    Calendar,
    Dashboard,
   // BubbleMaps,
   // GoogleMaps,


  ],
  providers: [
    CalendarService,
    FeedService,
    LineChartService,
    PieChartService,
    TodoService,
    TrafficChartService,
    UsersMapService,
    CommunityService,
    NewUserService,
    TenantService
   // BubbleMapsService
  ]
})
export class DashboardModule {}
