import { Component, ViewChild } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { UIChart } from 'primeng/chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client-angular';
  message = 'Hello';
  barData$: Observable<any>;
  @ViewChild('chart', {static: false}) chart: UIChart;

  constructor(private service: DataService) {
  }


  connect() {
    this.service.connect();
  }

  close() {
    this.service.close();
  }

  reconnect() {
    this.service.connect({reconnect : true});
  }

}
