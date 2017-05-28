import {Route} from '@angular/router';
import {HomeComponent} from './home.component';
/**
 * Created by SterOtto on 2017/5/28.
 */
export const HOME_ROUTE: Route = {
  path: '',
  component: HomeComponent,
  data: {
    pageTitle: 'home.title'
  }
};
