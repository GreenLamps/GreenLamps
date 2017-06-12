import {Route} from '@angular/router';
import {BiddingProcurementComponent} from './bidding-procurement.component';
import {ContentGreenLightsResolvePagingParams} from '../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/3.
 */
export const BIDDING_PROCUREMENT_MODULE: Route = {
  path: 'bidding-procurement',
  component: BiddingProcurementComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
}
