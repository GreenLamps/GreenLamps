/**
 * Created by zhang on 2017/6/3.
 */

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {PROJECT_DEMO_ROUTE} from './project-demo.route';
import {ProjectDemoComponent} from './project-demo.component';
import {SelectedCaseModule} from './selected-case/selected-case.module';
import {AuthorityCommentModule} from './authority-comment/authority-comment.module';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([PROJECT_DEMO_ROUTE], {useHash: true}),
  ],
  declarations: [
    ProjectDemoComponent,
  ],
  exports: [
    RouterModule,
    SelectedCaseModule,
    AuthorityCommentModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectDemoModule {
}
