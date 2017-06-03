/**
 * Created by zhang on 2017/6/3.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AUTUORITY_COMMENT_TOUTE} from './authority-comment.route';
import {AuthorityCommentComponent} from './authority-comment.component';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([AUTUORITY_COMMENT_TOUTE], {useHash: true}),
  ],
  declarations: [
    AuthorityCommentComponent,
  ],
  exports: [
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthorityCommentModule {
}
