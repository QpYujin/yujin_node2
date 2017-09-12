import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';

import { NgaModule } from '../../theme/nga.module';
import { Login } from './login.component';
import { routing }       from './login.routing';
import {TenantService} from '../../../restApi/tetants.services'
import {CommunityService} from '../../../restApi/community.services'
import {NewUserService} from '../../../restApi/newUsers.services'
import { AgmCoreModule } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import { ElementRef,NgZone, ViewChild } from '@angular/core';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule } from "@angular/forms";


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
    Login
  ],
  providers: [

    CommunityService,
    NewUserService,
    TenantService
    
  ]
})
export class LoginModule {}
