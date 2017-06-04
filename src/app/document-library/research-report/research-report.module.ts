/**
 * Created by zhang on 2017/6/5.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {RESEARCH_REPORT_ROUTE} from './research-report.route';
import {ResearchReportComponent} from './research-report.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([RESEARCH_REPORT_ROUTE], {useHash: true}),
  ],
  declarations: [
    ResearchReportComponent,
  ],
  exports: [
    RouterModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class ResearchReportModule {
}
