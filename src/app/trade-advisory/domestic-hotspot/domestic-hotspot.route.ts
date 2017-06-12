import {Route} from '@angular/router';
import {DomesticHotspotComponent} from './domestic-hotspot.component';
import {ContentGreenLightsResolvePagingParams} from '../../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/1.
 */
export const DOMESTIC_HOTSPOT_ROUTE: Route = {
  path: 'trade-advisory/domestic-hotspot',
  component: DomesticHotspotComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
};
