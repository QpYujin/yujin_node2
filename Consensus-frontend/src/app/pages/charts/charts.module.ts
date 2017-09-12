import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//import {MyDatePickerModule} from '../../../../node_modules/angular2-datepicker/src/my-date-picker/my-date-picker.module'
import { MyDatePickerModule } from 'mydatepicker';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routing }       from './charts.routing';
import { Charts } from './charts.component';
import{EditorsModule} from '../editors/editors.module'
import { ChartistJs } from './components/chartistJs/chartistJs.component';
import { ChartistJsService } from './components/chartistJs/chartistJs.service';
import { AppTranslationModule } from '../../app.translation.module';
import { SmartTablesService } from './components/smartTables/smartTables.service';

import { SmartTables } from './components/smartTables/smartTables.component';

import {AddTenantPayment} from './components/addTenantPayment/addTenantPayment.component'
import {TenantService} from '../../../restApi/tetants.services';

import { ControlMessagesComponent } from '../shared/formValidation/control-messages.component';


@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    FormsModule,
    //ControlMessagesComponent,
    ReactiveFormsModule,
    EditorsModule,
    NgaModule,
    Ng2SmartTableModule,
    MyDatePickerModule,
    routing,



  ],
  declarations: [
    Charts,
    ChartistJs,
    SmartTables,
    AddTenantPayment,
   // ControlMessagesComponent
  ],
  providers: [
    ChartistJsService,
    SmartTablesService,
    TenantService,

  ]
})
export class ChartsModule {}
