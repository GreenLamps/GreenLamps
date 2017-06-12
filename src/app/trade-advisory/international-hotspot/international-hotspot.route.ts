import {Route} from '@angular/router';
import {InternationalHotspotComponent} from './international-hotspot.component';
import {ContentGreenLightsResolvePagingParams} from '../../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/1.
 */
export const INTERNATIONAL_HOTSPOT_ROUTE: Route = {
  path: 'trade-advisory/international-hotspot',
  component: InternationalHotspotComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
}
