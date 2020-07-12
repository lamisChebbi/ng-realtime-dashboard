import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { LiveTableComponent } from './live-table/live-table.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import {ProgressBarModule} from 'primeng/progressbar';
import { InventoryComponent } from './charts/inventory/inventory.component';
import { MonthlyCashComponent } from './charts/monthly-cash/monthly-cash.component';
import { CashInfoComponent } from './cash-info/cash-info.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './store/reducers/app.reducers';
import { TransactionEffects } from './store/effects/transaction.effect';

@NgModule({
  declarations: [
    AppComponent,
    LiveTableComponent,
    InventoryComponent,
    MonthlyCashComponent,
    CashInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    TableModule,
    CardModule,
    ChartModule,
    ProgressBarModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([TransactionEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
