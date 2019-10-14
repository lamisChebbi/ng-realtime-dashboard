import { Component, ViewChild } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { UIChart } from 'primeng/chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
  }

}
