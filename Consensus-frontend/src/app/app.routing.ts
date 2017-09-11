import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './auth-guard.service';
import { CallbackComponent } from './callback.component';
import { HomePage } from '../app/pages/home/home';
import { Pages } from '../app/pages/pages.component';

import {AddCommunityComponent} from '../app/pages/community/add-community/add-community.component';
import {CommunityExpTenants} from '../app/pages/communityExpTenants/communityExpTenants.component'

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'communityExpenses',
    component: CommunityExpTenants,
    canActivate: [AuthGuard],
  },

 /* {
    path: 'pages',
    component: Pages,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' }
    ]
  },*/
  {
    path: 'callback',
    component: CallbackComponent,
  },


];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false});
export const routedComponents = [HomePage, CommunityExpTenants, CallbackComponent];
