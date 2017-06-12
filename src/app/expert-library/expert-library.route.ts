import {Route} from '@angular/router';
import {ExpertLibraryComponent} from './expert-library.component';
import {ContentGreenLightsResolvePagingParams} from '../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/4.
 */
export const EXPERT_LIBRARY_ROUTE: Route = {
  path: 'expert-library',
  component: ExpertLibraryComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
}
