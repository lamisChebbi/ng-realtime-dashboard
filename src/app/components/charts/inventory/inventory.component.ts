import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  template: `
  <p-card class="ng-inventor-chart">
  <div class="ng-inventor-label">DAYS INVENTORY OUTSTANDING</div>
  <p-chart type="doughnut" [height]="150" [data]="data" [options]="options"></p-chart>
  </p-card>
  `,
})
export class InventoryComponent {

  data = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        data: [50, 100, 50],
        backgroundColor: ['#4F33FF', '#6E33FF', '#A833FF']
      }
    ]
  };

  options = {
    responsive: false,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom'
    },
  };

  constructor() { }


}
