import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TreeModule } from 'ng2-tree';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routing }       from './components.routing';
import { Components } from './components.component';
import { TreeView } from './components/treeView/treeView.component';
import {AddCommunityExpenses} from './components/addCommunityExpenses/addCommunityExpenses.component'

import { SmartTablesService } from '../tables/components/smartTables/smartTables.service';
import {ControlMessagesComponent} from '../shared/formValidation/control-messages.component'
import{EditorsModule} from '../editors/editors.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    NgbModule,
    TreeModule,
    routing,
    Ng2SmartTableModule,
    NKDatetimeModule,
    EditorsModule

  ],


  declarations: [
    Components,
    TreeView,
    AddCommunityExpenses,
  // ControlMessagesComponent

  ],
  providers: [

    SmartTablesService,

  ],
  //exports: [ ControlMessagesComponent ]
})
export class ComponentsModule {}
