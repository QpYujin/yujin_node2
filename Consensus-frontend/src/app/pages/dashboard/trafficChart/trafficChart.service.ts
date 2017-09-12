import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class TrafficChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }


  getData() {
    let dashboardColors = this._baConfig.get().colors.dashboard;
    return [
      {
        value: 2000,
        color:"#FF6384",
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Rent Expense',
        percentage: 87,
        order: 1,
      }, {
        value: 1500,
        color: "#36A2EB",
        highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'Maintenance Expense',
        percentage: 22,
        order: 4,
      }, {
        value: 1000,
        color: "#FFCE56",
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Recreation Expense',
        percentage: 70,
        order: 3,
      }, {
        value: 1200,
        color: "#cce6ff",
        highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
        label: 'Deposits',
        percentage: 38,
        order: 2,
      }, {
        value: 400,
        color: "#00e6e6",
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'Others',
        percentage: 17,
        order: 0,
      },
    ];
  }
}
