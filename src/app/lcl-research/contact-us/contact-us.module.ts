/**
 * Created by zhang on 2017/6/1.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CONTACTUS_ROUTE} from './contact-us.route';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ContactUsComponent} from './contact-us.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([ CONTACTUS_ROUTE ], { useHash: true })
  ],
  declarations: [
    ContactUsComponent,
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactUsModule {
}
