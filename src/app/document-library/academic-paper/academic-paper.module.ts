/**
 * Created by zhang on 2017/6/5.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ACADEMIC_PAPER_ROUTE} from './academic-paper.route';
import {AcademicPaperComponent} from './academic-paper.component';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([ACADEMIC_PAPER_ROUTE], {useHash: true}),
  ],
  declarations: [
    AcademicPaperComponent,
  ],
  exports: [
    RouterModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AcademicPaperModule {
}
