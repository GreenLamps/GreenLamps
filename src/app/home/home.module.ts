import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HOME_ROUTE} from './home.route';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HomeComponent} from './home.component';
import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot([ HOME_ROUTE ], { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
