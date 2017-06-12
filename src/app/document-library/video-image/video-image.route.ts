import {Route} from '@angular/router';
import {VideoImageComponent} from './video-image.component';
import {ContentGreenLightsResolvePagingParams} from '../../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/5.
 */
export const VIDEO_IMAGE_ROUTE: Route = {
  path: 'document-library/video-image',
  component: VideoImageComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
}
