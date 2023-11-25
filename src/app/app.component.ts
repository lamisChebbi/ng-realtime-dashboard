import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="row">
  <div class="ng-inventor-column">
    <app-inventory></app-inventory>
  </div>
  <div class="ng-cash-column">
    <app-cash-info></app-cash-info>
  </div>
  <div class="ng-cash-month-column">
    <app-monthly-cash></app-monthly-cash>
  </div>
  </div>
  <app-live-table></app-live-table>
  <router-outlet></router-outlet>
`,
})
export class AppComponent {

  constructor() {
  }

}
