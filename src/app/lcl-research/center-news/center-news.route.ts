import {Route} from '@angular/router';
import {CenterNewsComponent} from './center-news.component';
import {ContentGreenLightsResolvePagingParams} from '../../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/1.
 */
export const CENTERNEWS_ROUTE: Route = {
  path: 'lcl-research/center-news',
  component: CenterNewsComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
}
