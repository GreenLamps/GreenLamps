import {Route} from '@angular/router';
import {ProfBookComponent} from './prof-book.component';
import {ContentGreenLightsResolvePagingParams} from '../../config/content-green-lamps-resolve-paging-params';

/**
 * Created by zhang on 2017/6/5.
 */
export const PROF_BOOK_ROUTE: Route = {
  path: 'document-library/prof-book',
  component: ProfBookComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
}
