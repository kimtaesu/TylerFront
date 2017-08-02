import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PcapService} from './service/pcap.service';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdIconModule,
  MdListModule,
  MdRippleModule,
} from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MdAutocompleteModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdIconModule,
    MdListModule,
    MdRippleModule,
  ],
  providers: [PcapService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
