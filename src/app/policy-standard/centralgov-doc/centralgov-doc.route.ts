import {Route} from '@angular/router';
import {CentralgovDocComponent} from './centralgov-doc.component';
import {ContentGreenLightsResolvePagingParams} from '../../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/2.
 */

export const CENTRALGOV_DOC_ROUTE: Route = {
  path: 'policy-standard/centralgov-doc',
  component: CentralgovDocComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
};
