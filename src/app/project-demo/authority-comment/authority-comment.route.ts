import {Route} from '@angular/router';
import {AuthorityCommentComponent} from './authority-comment.component';
import {ContentGreenLightsResolvePagingParams} from '../../config/content-green-lamps-resolve-paging-params';
/**
 * Created by zhang on 2017/6/3.
 */
export const AUTUORITY_COMMENT_TOUTE: Route = {
  path: 'project-demo/authority-comment',
  component: AuthorityCommentComponent,
  resolve: {
    'pagingParams': ContentGreenLightsResolvePagingParams,
  },
}
