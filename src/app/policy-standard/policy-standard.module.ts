/**
 * Created by zhang on 2017/6/2.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {PolicyStandardComponent} from './policy-standard.component';
import {RouterModule} from '@angular/router';
import {POLICY_STANDARD_ROUTE} from './policy-standard.route';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {LocalgovDocModule} from './localgov-doc/localgov-doc.module';
import {CentralgovDocModule} from './centralgov-doc/centralgov-doc.module';
import {InternationalStdModule} from './international-std/international-std.module';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    CentralgovDocModule,
    LocalgovDocModule,
    InternationalStdModule,
    RouterModule.forRoot([POLICY_STANDARD_ROUTE], {useHash: true}),
  ],
  declarations: [
    PolicyStandardComponent,
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class PolicyStandardModule {
}
