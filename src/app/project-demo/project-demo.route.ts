import {Route} from '@angular/router';
import {ProjectDemoComponent} from './project-demo.component';
import {ContentGreenLightsResolvePagingParams} from '../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/3.
 */

export const PROJECT_DEMO_ROUTE: Route = {
  path: 'project-demo',
  component: ProjectDemoComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
}
