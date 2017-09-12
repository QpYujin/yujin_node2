import {  Component } from '@angular/core';
import {TrafficChartService} from './trafficChart.service';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
//import Chart from 'chart.js';
//declare let Chart:any;

@Component({
  selector: 'traffic-chart',
  templateUrl: './trafficChart.html',
  styleUrls: ['./trafficChart.scss']
})

// TODO: move chart.js to it's own component
export class TrafficChart {


  public doughnutData: Array<Object>;
  d="$ ";
  constructor(private trafficChartService:TrafficChartService,
              private _baConfig:BaThemeConfigProvider) {
    this.doughnutData = trafficChartService.getData();
    console.log(this.doughnutData);


  }
  labels: string[] = [ 'Rent Expense(in $)', 'Maintenance Expense(in $)', 'Recreation Expense(in $)', 'Deposits(in $)' ,'Others(in $)'];
  type: string = 'doughnut';
  position: string = 'left';
  legend: boolean = false;
  chartOptions = {

  cutoutPercentage: 50,

};

  datasets: any[] = [{
    data: [ 5450, 3350, 4100, 3000, 1000 ],
    backgroundColor: [
      "#FF6384",
      "#36A2EB",
      "#FFCE56"
    ],
    hoverBackgroundColor: [
      "#FF6384",
      "#36A2EB",
      "#FFCE56"
    ]
  }];


  ngAfterViewInit() {
   // this._loadDoughnutCharts();
  }

  private _loadDoughnutCharts() {
    let el = jQuery('.chart-area').get(0) as HTMLCanvasElement;
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: true,
      percentageInnerCutout : 64,
      responsive: true
    });
  }




}
