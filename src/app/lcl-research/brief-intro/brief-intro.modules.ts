/**
 * Created by zhang on 2017/5/31.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BRIEFINTRO_ROUTE} from './brief-intro.route';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BriefIntroComponent} from './brief-intro.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([ BRIEFINTRO_ROUTE ], { useHash: true })
  ],
  declarations: [
    BriefIntroComponent,
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class BriefIntroModule {
}
