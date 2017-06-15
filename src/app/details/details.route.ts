import {Route} from '@angular/router';
import {DetailsComponent} from './details.component';
/**
 * Created by SterOtto on 2017/6/11.
 */

export const DETAILS_ROUTE: Route = {
  path: 'details/:id',
  component: DetailsComponent,
}
