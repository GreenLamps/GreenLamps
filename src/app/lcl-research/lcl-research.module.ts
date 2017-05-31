/**
 * Created by zhang on 2017/5/28.
 */

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {LclResearchComponent} from './lcl-research.component';
import {LCLRESEARCH_ROUTE} from './lcl-research.route';
import { CenterNewsComponent } from './center-news/center-news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {BriefIntroModule} from './brief-intro/brief-intro.modules';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BriefIntroModule,
    RouterModule.forRoot([ LCLRESEARCH_ROUTE ], { useHash: true }),
  ],
  declarations: [
    LclResearchComponent,
    CenterNewsComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class LclResearchModule {
}
