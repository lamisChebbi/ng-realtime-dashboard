import { Component, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UIChart } from 'primeng/chart';

@Component({
  selector: 'app-monthly-cash',
  template: `
  <p-card>
  <div class="ng-cash-label">CASH</div>
  <div class="ng-end-of-month-label">at end of month</div>
  <p-chart type="bar" #chart [data]="barData" [height]="135" [options]="barOptions"></p-chart>
  </p-card>
`,
})
export class MonthlyCashComponent {
  @ViewChild('chart', { static: false }) chart: UIChart;

  barData = {
    labels: [
      'Jan 2019',
      'Feb 2019',
      'Mar 2019',
      'Apr 2019',
      'May 2019',
      'Jun 2019',
      'Aug 2019',
      'Sep 2019',
      'Oct 2019',
      'Nov 2019',
      'Dec 2019'
    ],
    datasets: [
      {
        label: 'First Dataset',
        data: [18, 17, 19, 19, 17, 18, 16, 17, 17, 18, 16, 17, 15],
        backgroundColor: [
          '#4F33FF',
          '#6E33FF',
          '#A833FF',
          '#4F33FF',
          '#6E33FF',
          '#A833FF',
          '#4F33FF',
          '#6E33FF',
          '#A833FF',
          '#4F33FF',
          '#6E33FF',
          '#A833FF'
        ]
      }
    ]
  };
  barOptions = {
    responsive: false,
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  };
  copy: {
    labels: string[];
    datasets: { label: string; data: number[]; backgroundColor: string[] }[];
  };
  constructor(private service: DataService) { }

}
