import { Routes, RouterModule }  from '@angular/router';

import { AddCommunityComponent } from './add-community.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: AddCommunityComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
