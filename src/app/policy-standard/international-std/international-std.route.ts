import {Route} from '@angular/router';
import {InternationalStdComponent} from './international-std.component';
import {ContentGreenLightsResolvePagingParams} from '../../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/2.
 */

export const INTERNATIONAL_STD_ROUTE: Route = {
  path: 'policy-standard/international-std',
  component: InternationalStdComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
};
