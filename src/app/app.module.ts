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
import { ProjectDemoComponent } from './project-demo/project-demo.component';
import {ProjectDemoModule} from "./project-demo/project-demo.module";

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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule {
}
