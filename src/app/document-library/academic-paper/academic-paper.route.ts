import {Route} from '@angular/router';
import {AcademicPaperComponent} from './academic-paper.component';
import {ContentGreenLightsResolvePagingParams} from '../../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/5.
 */
export const ACADEMIC_PAPER_ROUTE: Route = {
  path: 'document-library/academic-paper',
  component: AcademicPaperComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
}
