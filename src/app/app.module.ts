import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { CarouselModule } from 'angular4-carousel';

import {AppComponent} from './app.component';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HomeModule} from './home/home.module';
import {LclResearchModule} from './lcl-research/lcl-research.module';
import {TradeAdvisoryModule} from './trade-advisory/trade-advisory.module';
import {PolicyStandardModule} from './policy-standard/policy-standard.module';
import {ExpertViewsModule} from './expert-views/expert-views.module';
import {ProjectDemoModule} from './project-demo/project-demo.module';
import {BiddingProcurementModule} from './bidding-procurement/bidding-procurement.module';
import {OfficialJournalModule} from './official-journal/official-journal.module';
import {DocumentLibraryModule} from './document-library/document-library.module';
import {OnlineCourseModule} from './online-course/online-course.module';
import {ExpertLibraryModule} from './expert-library/expert-library.module';
import {ContentGreenLightsResolvePagingParams} from './config/content-green-lamps-resolve-paging-params';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule,
    HomeModule,
    LclResearchModule,
    TradeAdvisoryModule,
    PolicyStandardModule,
    ExpertViewsModule,
    ProjectDemoModule,
    BiddingProcurementModule,
    OfficialJournalModule,
    DocumentLibraryModule,
    OnlineCourseModule,
    ExpertLibraryModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    ContentGreenLightsResolvePagingParams,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
