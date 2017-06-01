/**
 * Created by zhang on 2017/6/1.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {AboutUsComponent} from './about-us.component';
import {ABOUTUS_ROUTE} from './about-us.route';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([ ABOUTUS_ROUTE ], { useHash: true })
  ],
  declarations: [
    AboutUsComponent,
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutUsModule {

}
