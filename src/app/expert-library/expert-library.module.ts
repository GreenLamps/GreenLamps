/**
 * Created by zhang on 2017/6/4.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EXPERT_LIBRARY_ROUTE} from './expert-library.route';
import {ExpertLibraryComponent} from './expert-library.component';
import {ContentGreenLampService} from '../entities/content/content-green-lamp.service';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([EXPERT_LIBRARY_ROUTE], {useHash: true}),
  ],
  declarations: [
    ExpertLibraryComponent,
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    ContentGreenLampService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class ExpertLibraryModule {
}
