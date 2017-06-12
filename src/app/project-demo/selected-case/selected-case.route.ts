import {Route} from '@angular/router';
import {SelectedCaseComponent} from './selected-case.component';
import {ContentGreenLightsResolvePagingParams} from '../../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/3.
 */
export const SELECTED_CASE_ROUTE: Route = {
  path: 'project-demo/selected-case',
  component: SelectedCaseComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
}
