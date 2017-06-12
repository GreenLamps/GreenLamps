import {Route} from '@angular/router';
import {ConventionTrackingComponent} from './convention-tracking.component';
import {ContentGreenLightsResolvePagingParams} from '../../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/2.
 */
export const CONVENTION_TRACKING_ROUTE: Route = {
  path: 'trade-advisory/convention-tracking',
  component: ConventionTrackingComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
}
