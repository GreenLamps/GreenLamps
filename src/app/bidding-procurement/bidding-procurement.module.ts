/**
 * Created by zhang on 2017/6/3.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BIDDING_PROCUREMENT_MODULE} from './bidding-procurement.route';
import {BiddingProcurementComponent} from './bidding-procurement.component';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([BIDDING_PROCUREMENT_MODULE], {useHash: true}),
  ],
  declarations: [
    BiddingProcurementComponent,
  ],
  exports: [
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BiddingProcurementModule {
}
