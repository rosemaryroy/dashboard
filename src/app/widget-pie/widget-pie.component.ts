import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './widget-pie.component.html',
  styleUrls: ['./widget-pie.component.css']
})
export class WidgetPieComponent {
  Highcharts = Highcharts
  chartOptions = {}
  constructor() {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Company Placements in May, 2020'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      credits:{
        enabled: false
      },
      series: [{
        name: 'Companies',
        colorByPoint: true,
        data: [{
          name: 'Wipro',
          y: 70.67,
          sliced: true,
          selected: true
        }, {
          name: 'Infosys',
          y: 14.77
        }, {
          name: 'EY',
          y: 4.86
        }, {
          name: 'TCS',
          y: 2.63
        }, {
          name: 'Deolite',
          y: 1.53
        }, {
          name: 'HP',
          y: 1.40
        }, {
          name: 'IBM',
          y: 0.84
        }, {
          name: 'Experion',
          y: 0.51
        }, {
          name: 'others',
          y: 2.6
        }]
      }]
    }
  }
}
