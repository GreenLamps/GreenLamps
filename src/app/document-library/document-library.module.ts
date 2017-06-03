/**
 * Created by zhang on 2017/6/4.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {DOCUMENT_LIBRARY_ROUTE} from './document-library.route';
import {DocumentLibraryComponent} from './document-library.component';
import { ProfBookComponent } from './prof-book/prof-book.component';
import { AcademicPaperComponent } from './academic-paper/academic-paper.component';
import { ResearchReportComponent } from './research-report/research-report.component';
import { VideoImageComponent } from './video-image/video-image.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([DOCUMENT_LIBRARY_ROUTE], {useHash: true}),
  ],
  declarations: [
    DocumentLibraryComponent,
    ProfBookComponent,
    AcademicPaperComponent,
    ResearchReportComponent,
    VideoImageComponent,
  ],
  exports: [
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DocumentLibraryModule {
}
