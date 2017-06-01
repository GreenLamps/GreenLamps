/**
 * Created by zhang on 2017/5/28.
 */

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {LclResearchComponent} from './lcl-research.component';
import {LCLRESEARCH_ROUTE} from './lcl-research.route';
import {BriefIntroModule} from './brief-intro/brief-intro.modules';
import {CenterNewsModule} from './center-news/center-news.modules';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BriefIntroModule,
    CenterNewsModule,
    RouterModule.forRoot([ LCLRESEARCH_ROUTE ], { useHash: true }),
  ],
  declarations: [
    LclResearchComponent
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class LclResearchModule {
}
