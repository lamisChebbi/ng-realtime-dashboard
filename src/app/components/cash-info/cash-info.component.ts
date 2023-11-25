import { Component } from '@angular/core';

@Component({
  selector: 'app-cash-info',
  template: `
  <p-card class="ng-cash-chart">
    <div class="ng-cash-balance-label">CASH BALANCE</div>
    <div class="ng-cash-amount">€ 183,308.85</div>
    <div class="flex-container">
        <div class="ng-cash-in">IN</div>
        <div class="ng-cash-in-amount">€ 311,625.05</div>
    </div>
    <div class="flex-container">
        <div class="ng-cash-out">OUT</div>
        <div class="ng-cash-in">€ 311,625.05</div>
    </div>
  </p-card>`,
})
export class CashInfoComponent {

  constructor() { }
}
