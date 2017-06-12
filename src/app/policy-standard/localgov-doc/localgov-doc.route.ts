import {Route} from '@angular/router';
import {LocalgovDocComponent} from './localgov-doc.component';
import {ContentGreenLightsResolvePagingParams} from '../../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/2.
 */

export const LOCALGOV_DOC_ROUTE: Route = {
  path: 'policy-standard/localgov-doc',
  component: LocalgovDocComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
};
