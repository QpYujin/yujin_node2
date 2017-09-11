import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Register } from './register.component';
import { routing }       from './register.routing';
import {TenantService}from '../../../restApi/tetants.services'


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Register
  ],
  providers: [


    TenantService
    // BubbleMapsService
  ]
})
export class RegisterModule {}
