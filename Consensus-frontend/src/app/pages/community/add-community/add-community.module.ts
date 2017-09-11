import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppTranslationModule } from '../../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { AgmCoreModule } from '@agm/core';
import { AddCommunityComponent } from './add-community.component';
import {CommunityService} from '../../../../restApi/community.services'
import { routing }       from './add-community.routing';
import {TenantService} from '../../../../restApi/tetants.services';
import{ EditorsModule} from '../../editors/editors.module'
import { ControlMessagesComponent } from '../../shared/formValidation/control-messages.component';
import { UsersMap } from '../../dashboard/usersMap';
import { UsersMapService } from '../../dashboard/usersMap/usersMap.service';
import { MapsAPILoader } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB-59QEf0Y6j_EBoOxRBp0HM8dJ3PZ0mGg',
      libraries: ["places"]
    })
  ],
  declarations: [
    AddCommunityComponent,
    ControlMessagesComponent,
    UsersMap
  ],
  providers: [
    CommunityService,
    TenantService,
    UsersMapService

  ]
})
export class AddCommunityModule {
}

