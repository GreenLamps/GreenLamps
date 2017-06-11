/**
 * Created by zhang on 2017/5/28.
 */
import {Route} from '@angular/router';
import {LclResearchComponent} from './lcl-research.component';
import {ContentGreenLightsResolvePagingParams} from '../config/content-green-lamps-resolve-paging-params';
export const LCLRESEARCH_ROUTE: Route = {
    path: 'lcl-research',
    component: LclResearchComponent,
    resolve: {
      'pagingParams': ContentGreenLightsResolvePagingParams,
    },
  };
