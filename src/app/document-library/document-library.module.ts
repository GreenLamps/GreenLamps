/**
 * Created by zhang on 2017/6/4.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {DOCUMENT_LIBRARY_ROUTE} from './document-library.route';
import {DocumentLibraryComponent} from './document-library.component';
import {VideoImageModule} from './video-image/video-image.module';
import {AcademicPaperModule} from './academic-paper/academic-paper.module';
import {ProfBookModule} from './prof-book/prof-book.module';
import {ResearchReportModule} from './research-report/research-report.module';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AcademicPaperModule,
    ProfBookModule,
    ResearchReportModule,
    VideoImageModule,
    RouterModule.forRoot([DOCUMENT_LIBRARY_ROUTE], {useHash: true}),
  ],
  declarations: [
    DocumentLibraryComponent,
  ],
  exports: [
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DocumentLibraryModule {
}
