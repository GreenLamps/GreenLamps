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
import { PolicyStandardComponent } from './policy-standard/policy-standard.component';
import { CentralgovDocComponent } from './policy-standard/centralgov-doc/centralgov-doc.component';
import { LocalgovDocComponent } from './policy-standard/localgov-doc/localgov-doc.component';
import { InternationalStdComponent } from './policy-standard/international-std/international-std.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PolicyStandardComponent,
    CentralgovDocComponent,
    LocalgovDocComponent,
    InternationalStdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule,
    HomeModule,
    LclResearchModule,
    TradeAdvisoryModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule {
}
