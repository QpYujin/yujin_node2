import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { HomePage } from '../pages/home/home';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };
import { AuthGuard } from '../auth-guard.service';
import { CallbackComponent } from '../callback.component';



export const routes: Routes = [

 /* { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'callback',
    component: CallbackComponent,
  },*/
  {
    path: 'addCommunity',
    loadChildren: 'app/pages/community/add-community/add-community.module#AddCommunityModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'direct',
    loadChildren: 'app/pages/login/login.module#LoginModule',
    canActivate: [AuthGuard],
  },

  {
    path: 'tenantPayment',
    loadChildren: 'app/pages/register/register.module#RegisterModule',
    canActivate: [AuthGuard],
  },


  {
    path: 'pages',
    component: Pages,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'tenant', loadChildren: './editors/editors.module#EditorsModule' },
      { path: 'reportEmg', loadChildren: './editorsEmg/editors.module#EditorsModuleEmg' },
      { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' }
    ]
  },
 //{ path: '**',  redirectTo: '/pages' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
