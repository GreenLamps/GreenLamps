/**
 * Created by zhang on 2017/6/4.
 */
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {OFFICIAL_JOURNAL_ROUTE} from './official-journal.route';
import {OfficialJournalComponent} from './official-journal.component';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([OFFICIAL_JOURNAL_ROUTE], {useHash: true}),
  ],
  declarations: [
    OfficialJournalComponent,
  ],
  exports: [
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OfficialJournalModule {
}
