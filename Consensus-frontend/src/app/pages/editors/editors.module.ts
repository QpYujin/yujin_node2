import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule,FormGroupDirective} from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';

import { NgaModule } from '../../theme/nga.module';

import { routing }       from './editors.routing';

import { Editors } from './editors.component';
import { Ckeditor } from './components/ckeditor/ckeditor.component';
import { Ckeditor1 } from './components/ckeditor1/ckeditor1.component';
import { EditTenant} from './components/editTenant/editTenant.component'

import {TenantService} from '../../../restApi/tetants.services'

import { FlashMessagesService } from 'angular2-flash-messages';

//import {SearchPipe} from '../shared/custmized-pipe'
import { ControlMessagesComponent } from '../shared/formValidation/control-messages.component';
//import { ValidationService } from '../shared/formValidation/validation.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgaModule,
    CKEditorModule,
    routing,
  ],
  declarations: [
    Editors,
    Ckeditor,
    Ckeditor1,
    EditTenant,
    ControlMessagesComponent,

  ],
  providers: [
    TenantService,
    FlashMessagesService,
   // ValidationService,
   // FormGroupDirective

  ],
  exports: [ ControlMessagesComponent ]
})
export class EditorsModule {
}
