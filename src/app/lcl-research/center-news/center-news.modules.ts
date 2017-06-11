/**
 * Created by zhang on 2017/6/1.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {CenterNewsComponent} from './center-news.component';
import {CENTERNEWS_ROUTE} from './center-news.route';
import {GreenLampsSharedModule} from '../../config/lib/shared.module';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([ CENTERNEWS_ROUTE ], { useHash: true }),
    GreenLampsSharedModule,
  ],
  declarations: [
    CenterNewsComponent,
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class CenterNewsModule {
}
