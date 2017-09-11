import { Routes, RouterModule }  from '@angular/router';

import { Components } from './components.component';
import { TreeView } from './components/treeView/treeView.component';
import {AddCommunityExpenses} from './components/addCommunityExpenses/addCommunityExpenses.component'


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Components,
    children: [
      { path: 'expensesList', component: TreeView },
      { path: 'addCommunityExpenses', component: AddCommunityExpenses }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
