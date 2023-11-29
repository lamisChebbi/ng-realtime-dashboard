import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { LiveTableComponent } from './components/live-table/live-table.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import {ProgressBarModule} from 'primeng/progressbar';
import { CashInfoComponent } from './components/cash-info/cash-info.component';
import { InventoryComponent } from './components/charts/inventory/inventory.component';
import { MonthlyCashComponent } from './components/charts/monthly-cash/monthly-cash.component';
import { StoreModule } from '@ngrx/store';

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
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
