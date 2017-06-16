/**
 * Created by zhang on 2017/6/1.
 */

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {INTERNATIONAL_HOTSPOT_ROUTE} from './international-hotspot.route';
import {InternationalHotspotComponent} from './international-hotspot.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([INTERNATIONAL_HOTSPOT_ROUTE], {useHash: true}),
  ],
  declarations: [
    InternationalHotspotComponent,
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class InternationalHotspotModule {
}
