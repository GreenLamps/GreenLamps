import {InternationalStdComponent} from './international-std.component';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {INTERNATIONAL_STD_ROUTE} from './international-std.route';
/**
 * Created by zhang on 2017/6/2.
 */
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([INTERNATIONAL_STD_ROUTE], {useHash: true}),
  ],
  declarations: [
    InternationalStdComponent,
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class InternationalStdModule {
}
