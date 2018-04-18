import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { StockInfoComponent } from './stock-info/stock-info.component';
import { PriceService } from './price.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    StockInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
