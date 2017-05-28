/**
 * Created by zhang on 2017/5/28.
 */

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {LCRESEARCH_ROUTE} from './lc-research.route';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([ LCRESEARCH_ROUTE ], { useHash: true }),
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class LcResearchModule {
}
