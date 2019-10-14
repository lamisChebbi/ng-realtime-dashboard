import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

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
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI
  };

  constructor() { }

  ngOnInit() {
  }

}
