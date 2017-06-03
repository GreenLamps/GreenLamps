/**
 * Created by zhang on 2017/6/3.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {SELECTED_CASE_ROUTE} from './selected-case.route';
import {SelectedCaseComponent} from './selected-case.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([SELECTED_CASE_ROUTE], {useHash: true}),
  ],
  declarations: [
    SelectedCaseComponent,
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SelectedCaseModule {
}
