import {Route} from '@angular/router';
import {TradeAdvisoryComponent} from './trade-advisory.component';
import {ContentGreenLightsResolvePagingParams} from '../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/1.
 */
export const TRADEADVISORY_ROUTE: Route = {
  path: 'trade-advisory',
  component: TradeAdvisoryComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
};
