import { Routes, RouterModule }  from '@angular/router';

import { Maps } from './maps.component';
import { BubbleMaps } from './components/bubbleMaps/bubbleMaps.component';
import { GoogleMaps } from './components/googleMaps/googleMaps.component';
import { LeafletMaps } from './components/leafletMaps/leafletMaps.component';
import { LineMaps } from './components/lineMaps/lineMaps.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Maps,
    children: [
      { path: 'pool_maintenance', component: BubbleMaps },
      { path: 'product', component: GoogleMaps },
      { path: 'services', component: LeafletMaps },
      { path: 'playground_maintenance', component: LineMaps }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
