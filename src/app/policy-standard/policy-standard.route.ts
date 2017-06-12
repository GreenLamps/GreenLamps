import {Route} from '@angular/router';
import {PolicyStandardComponent} from './policy-standard.component';
import {ContentGreenLightsResolvePagingParams} from '../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/2.
 */

export const POLICY_STANDARD_ROUTE: Route = {
  path: 'policy-standard',
  component: PolicyStandardComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
};
