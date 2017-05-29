import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HOME_ROUTE} from './home.route';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
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
