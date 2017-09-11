import { Routes, RouterModule }  from '@angular/router';

import { Forms } from './forms.component';
import { Inputs } from './components/inputs/inputs.component';
import { Layouts } from './components/layouts/layouts.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Forms,
    children: [
      { path: 'allClubs', component: Layouts },
      { path: 'inputs', component: Inputs },
      { path: 'reading', component: Layouts },
      { path: 'chess', component: Inputs },
      { path: 'triathen', component: Layouts }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
