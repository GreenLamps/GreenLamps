import {Route} from '@angular/router';
import {OfficialJournalComponent} from './official-journal.component';
import {ContentGreenLightsResolvePagingParams} from '../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/4.
 */
export const OFFICIAL_JOURNAL_ROUTE: Route = {
  path: 'official-journal',
  component: OfficialJournalComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
}
