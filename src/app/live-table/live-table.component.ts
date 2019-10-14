import {
  Component,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ITransaction } from '../models/Transaction.model';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-live-table',
  templateUrl: './live-table.component.html',
  styleUrls: ['./live-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveTableComponent implements OnInit, OnDestroy {


   trade$= this.service.dataUpdates$().pipe(
    map(rows => rows.data),
    tap({ error: err => console.log(err), 
      complete: () => console.log('Connexion Closed') })
  );  

  constructor(private service: DataService) {
  }

  updateStatus(trade) {
    this.service.sendMessage(trade);
    console.log(trade);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.service.closeConnection();
  }
}
