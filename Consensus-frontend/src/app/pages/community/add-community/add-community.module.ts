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

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    AddCommunityComponent,
    ControlMessagesComponent
  ],
  providers: [
    CommunityService,
    TenantService

  ]
})
export class AddCommunityModule {
}

