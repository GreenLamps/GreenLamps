/**
 * Created by zhang on 2017/6/1.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {TRADEADVISORY_ROUTE} from './trade-advisory.route';
import {RouterModule} from '@angular/router';
import {TradeAdvisoryComponent} from './trade-advisory.component';
import {InternationalHotspotModule} from './international-hotspot/international-hotspot.module';
import {DomesticHotspotModule} from './domestic-hotspot/domestic-hotspot.module';
import {ConventionTrackingModule} from './convention-tracking/convention-tracking.module';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    InternationalHotspotModule,
    DomesticHotspotModule,
    ConventionTrackingModule,
    RouterModule.forRoot([TRADEADVISORY_ROUTE], {useHash: true}),
  ],
  declarations: [
    TradeAdvisoryComponent,
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TradeAdvisoryModule {
}
