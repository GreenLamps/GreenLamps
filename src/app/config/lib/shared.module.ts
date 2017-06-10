import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import {GreenLampsSharedLibsModule} from './shared-libs.module';
import {GreenLampsSharedCommonModule} from './shared-common.module';


@NgModule({
    imports: [
      GreenLampsSharedLibsModule,
      GreenLampsSharedCommonModule
    ],
    providers: [
        CookieService,
        DatePipe
    ],
    exports: [
      GreenLampsSharedCommonModule,
      DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class GreenLampsSharedModule {}
