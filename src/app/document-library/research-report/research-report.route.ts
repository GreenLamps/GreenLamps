import {Route} from '@angular/router';
import {ResearchReportComponent} from './research-report.component';
import {ContentGreenLightsResolvePagingParams} from '../../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/5.
 */
export const RESEARCH_REPORT_ROUTE: Route = {
  path: 'document-library/research-report',
  component: ResearchReportComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
}
