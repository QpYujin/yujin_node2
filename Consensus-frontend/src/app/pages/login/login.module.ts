import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Login } from './login.component';
import { routing }       from './login.routing';

import {TenantService} from '../../../restApi/tetants.services'

import {CommunityService} from '../../../restApi/community.services'
import {NewUserService} from '../../../restApi/newUsers.services'


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
    Login
  ],
  providers: [

    CommunityService,
    NewUserService,
    TenantService
    // BubbleMapsService
  ]
})
export class LoginModule {}
