import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {PROF_BOOK_ROUTE} from './prof-book.route';
import {ProfBookComponent} from './prof-book.component';
/**
 * Created by zhang on 2017/6/5.
 */
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([PROF_BOOK_ROUTE], {useHash: true}),
  ],
  declarations: [
    ProfBookComponent,
  ],
  exports: [
    RouterModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})

export class ProfBookModule {
}
