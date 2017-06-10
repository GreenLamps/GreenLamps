/**
 * Created by zhang on 2017/5/31.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BRIEFINTRO_ROUTE} from './brief-intro.route';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BriefIntroComponent} from './brief-intro.component';
import {GreenLampsSharedModule} from '../../config/lib/shared.module';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([ BRIEFINTRO_ROUTE ], { useHash: true }),
    GreenLampsSharedModule,
  ],
  declarations: [
    BriefIntroComponent,
  ],
  providers: [
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class BriefIntroModule {
}
