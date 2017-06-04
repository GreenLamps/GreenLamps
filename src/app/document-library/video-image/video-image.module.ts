/**
 * Created by zhang on 2017/6/5.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {VIDEO_IMAGE_ROUTE} from './video-image.route';
import {VideoImageComponent} from './video-image.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([VIDEO_IMAGE_ROUTE], {useHash: true})
  ],
  declarations: [
    VideoImageComponent,
  ],
  exports: [
    RouterModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class VideoImageModule {
}
