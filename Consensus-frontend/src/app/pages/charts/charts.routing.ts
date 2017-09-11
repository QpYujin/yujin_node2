import { Routes, RouterModule }  from '@angular/router';

import { Charts } from './charts.component';
import { ChartistJs } from './components/chartistJs/chartistJs.component';
import { SmartTables } from './components/smartTables/smartTables.component';

import {AddTenantPayment} from './components/addTenantPayment/addTenantPayment.component'

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Charts,
    children: [
      { path: 'addTenantPayment', component: AddTenantPayment },
      { path: 'payment', component: ChartistJs },
      { path: 'smart-tables', component: SmartTables },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
