import { Routes, RouterModule }  from '@angular/router';

import { Editors } from './editors.component';
import { Ckeditor } from './components/ckeditor/ckeditor.component';
import { Ckeditor1 } from './components/ckeditor1/ckeditor1.component';
import { EditTenant } from './components/editTenant/editTenant.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Editors,
    children: [
      { path: 'tenantList', component: Ckeditor },
      { path: 'addTenant', component: Ckeditor1 },
      { path: 'editTenant', component:EditTenant},


    ]
  }
];

export const routing = RouterModule.forChild(routes);
