import { Component, OnInit } from '@angular/core';
import {ContentGreenLampService} from '../entities/content/content-green-lamp.service';
import {ActivatedRoute} from '@angular/router';
import {ContentGreenLamp} from '../entities/content/content-green-lamp.model';
import {environment} from '../../environments/environment';
import { Response } from '@angular/http';
import {CarouselConfig} from 'ngx-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}],
})
export class HomeComponent implements OnInit {
  selectedCases: ContentGreenLamp[];
  biddingProcurement: ContentGreenLamp[];
  expertViews: ContentGreenLamp[];
  domesticHot: ContentGreenLamp[];
  dynamic: ContentGreenLamp[];
  comment: ContentGreenLamp[];
  personalColumn: ContentGreenLamp;
  internationalHotspot: ContentGreenLamp[];
  centralgovDoc: ContentGreenLamp[];
  localgovDoc: ContentGreenLamp[];
  expertLibrary: ContentGreenLamp[];
  relatedWebSites: ContentGreenLamp[];
  constructor(private contentGreenLampService: ContentGreenLampService,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.contentGreenLampService.findTopContentByCategory(environment.SELECTED_CASE, 10)
      .subscribe(
        (res: Response) => this.selectedCases = res.json(),
            (res: Response) => console.error('loading selected cases error')
      );
    this.contentGreenLampService.findTopContentByCategory(environment.BIDDING_PROCUREMENT, 10)
      .subscribe(
        (res: Response) => this.biddingProcurement = res.json(),
        (res: Response) => console.error('loading selected cases error')
      );
    this.contentGreenLampService.findTopContentByCategory(environment.EXPERT_VIEWS, 10)
      .subscribe(
        (res: Response) => this.expertViews = res.json(),
        (res: Response) => console.error('loading export views error')
      );
    this.contentGreenLampService.findTopContentByCategory(environment.DOMESTIC_HOTSPOT, 10)
      .subscribe(
        (res: Response) => this.domesticHot = res.json(),
        (res: Response) => console.error('loading domestic hot error')
      );
    this.contentGreenLampService.findTopContentByCategory(environment.CONVENTION_TRACKING, 6)
      .subscribe(
        (res: Response) => this.dynamic = res.json(),
        (res: Response) => console.error('loading dynamic error')
      );
    this.contentGreenLampService.findTopContentByCategory(environment.AUTHORITY_COMMENT, 10)
      .subscribe(
        (res: Response) => this.comment = res.json(),
        (res: Response) => console.error('loading comment error'));
    this.contentGreenLampService.findTopOneContentByCategory(environment.EXPERT_LIBRARY)
      .subscribe(
        (res: Response) => this.personalColumn = res.json(),
        (res: Response) => console.error('loading personal column error')
        );
    this.contentGreenLampService.findTopContentByCategory(environment.INTERNATIONAL_HOTSPOT, 10)
      .subscribe(
        (res: Response) => this.internationalHotspot = res.json(),
        (res: Response) => console.error('loading international hotspot error')
      );
    this.contentGreenLampService.findTopContentByCategory(environment.CENTRALGOV_DOC, 10)
      .subscribe(
        (res: Response) => this.centralgovDoc = res.json(),
        (res: Response) => console.error('loading central gov doc error')
      );
    this.contentGreenLampService.findTopContentByCategory(environment.LOCALGOV_DOC, 10)
      .subscribe(
        (res: Response) => this.localgovDoc = res.json(),
        (res: Response) => console.error('loading local gov doc error')
      );
    this.contentGreenLampService.findTopContentByCategory(environment.EXPERT_LIBRARY, 10)
      .subscribe(
        (res: Response) => this.expertLibrary = res.json(),
        (res: Response) => console.error('loading expert library error')
      );
    this.contentGreenLampService.findTopContentByCategory(environment.RELATED_WEBSITES, 12)
      .subscribe(
        (res: Response) => this.relatedWebSites = res.json(),
        (res: Response) => console.error('loading related web sites error')
      );
  }

}
