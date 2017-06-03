import {CENTRALGOV_DOC_ROUTE} from './centralgov-doc.route';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {CentralgovDocComponent} from './centralgov-doc.component';
/**
 * Created by zhang on 2017/6/2.
 */
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([CENTRALGOV_DOC_ROUTE], {useHash: true}),
  ],
  declarations: [
    CentralgovDocComponent,
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class CentralgovDocModule {
}
