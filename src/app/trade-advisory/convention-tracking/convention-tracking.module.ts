/**
 * Created by zhang on 2017/6/2.
 */

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ConventionTrackingComponent} from './convention-tracking.component';
import {CONVENTION_TRACKING_ROUTE} from './convention-tracking.route';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([CONVENTION_TRACKING_ROUTE], {useHash: true}),
  ],
  declarations: [
    ConventionTrackingComponent,
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class ConventionTrackingModule{
}
