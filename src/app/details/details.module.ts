import {DetailsComponent} from './details.component';
import {DETAILS_ROUTE} from './details.route';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
/**
 * Created by SterOtto on 2017/6/11.
 */

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([DETAILS_ROUTE], {useHash: true}),
  ],
  declarations: [
    DetailsComponent,
  ],
  exports: [
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetailsModule {
}
