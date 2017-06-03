/**
 * Created by zhang on 2017/6/4.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ONLINE_COURSE_ROUTE} from './online-course.route';
import {OnlineCourseComponent} from './online-course.component';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([ONLINE_COURSE_ROUTE], {useHash: true}),
  ],
  declarations: [
    OnlineCourseComponent,
  ],
  exports: [
    RouterModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class OnlineCourseModule {
}
