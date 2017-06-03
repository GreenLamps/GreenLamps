/**
 * Created by zhang on 2017/6/2.
 */

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {EXPERT_VIEWS_ROUTE} from './expert-views.route';
import {ExpertViewsComponent} from './expert-views.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([EXPERT_VIEWS_ROUTE], {useHash: true}),
  ],
  declarations: [
    ExpertViewsComponent,
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class ExpertViewsModule {
}
