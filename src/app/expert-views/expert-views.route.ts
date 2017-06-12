import {Route} from '@angular/router';
import {ExpertViewsComponent} from './expert-views.component';
import {ContentGreenLightsResolvePagingParams} from '../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/2.
 */
export const EXPERT_VIEWS_ROUTE: Route = {
  path: 'expert-views',
  component: ExpertViewsComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
};
