import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'dashboard.no_tenant',
        stats: localStorage.getItem('noTenants'),
        icon: 'person',
      }, {
        color: pieColor,
        description: 'dashboard.no_groups',
        stats: '0',
        icon: 'face',

      }, {
        color: pieColor,
        description: 'dashboard.no_projects',
        stats: '0',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'dashboard.returned',
        stats: '0',
        icon: 'money',

      }
    ];






  }
}