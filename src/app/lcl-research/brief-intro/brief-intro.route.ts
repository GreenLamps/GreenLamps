import {Route} from '@angular/router';
import {BriefIntroComponent} from './brief-intro.component';
import {ContentGreenLightsResolvePagingParams} from '../../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/5/31.
 */
export const BRIEFINTRO_ROUTE: Route = {
  path: 'lcl-research/center-briefintro',
  component: BriefIntroComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
};
