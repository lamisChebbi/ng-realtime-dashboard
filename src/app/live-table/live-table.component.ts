import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { map, tap, catchError, retry } from 'rxjs/operators';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-live-table',
  templateUrl: './live-table.component.html',
  styleUrls: ['./live-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveTableComponent implements AfterViewInit {

  transactions$ = this.service.messages$.pipe(
    map(rows => rows['data']),
    catchError(error => { throw error }),
    tap({
      error: error => console.log('[Live Table component] Error:', error),
      complete: () => console.log('[Live Table component] Connection Closed')
    })
  );

  constructor(private service: DataService) {
  }

  ngAfterViewInit() {
    this.service.connect();
  }
}
