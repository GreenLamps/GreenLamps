/**
 * Created by zhang on 2017/6/1.
 */

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DomesticHotspotComponent} from './domestic-hotspot.component';
import {DOMESTIC_HOTSPOT_ROUTE} from './domestic-hotspot.route';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([DOMESTIC_HOTSPOT_ROUTE], {useHash: true}),
  ],
  declarations: [
    DomesticHotspotComponent,
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DomesticHotspotModule {}
