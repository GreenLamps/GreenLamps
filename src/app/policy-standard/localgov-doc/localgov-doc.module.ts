import {LOCALGOV_DOC_ROUTE} from './localgov-doc.route';
import {LocalgovDocComponent} from './localgov-doc.component';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
/**
 * Created by zhang on 2017/6/2.
 */
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([LOCALGOV_DOC_ROUTE], {useHash: true}),
  ],
  declarations: [
    LocalgovDocComponent,
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class LocalgovDocModule {
}
