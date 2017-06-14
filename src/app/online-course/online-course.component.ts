import {Component, OnInit} from '@angular/core';
import {ContentGreenLamp} from '../entities/content/content-green-lamp.model';
import {ContentGreenLampService} from '../entities/content/content-green-lamp.service';
import {environment} from '../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {EventManager, ParseLinks, PaginationUtil} from 'ng-jhipster';
import {Response} from '@angular/http';

@Component({
  selector: 'app-online-course',
  templateUrl: './online-course.component.html',
  styleUrls: ['./online-course.component.css']
})
export class OnlineCourseComponent implements OnInit {

  contents: ContentGreenLamp[];
  firstLine: ContentGreenLamp[];
  secondLine: ContentGreenLamp[];
  lastLine: ContentGreenLamp[];
  error: any;
  success: any;
  routeData: any;
  links: any;
  totalItems: any;
  queryCount: any;
  itemsPerPage: any;
  page: any;
  predicate: any;
  previousPage: any;
  reverse: any;

  constructor(private contentGreenLampService: ContentGreenLampService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private paginationUtil: PaginationUtil,
              private parseLinks: ParseLinks,) {
    this.itemsPerPage = environment.ITEMS_PER_PAGE_9;
    this.routeData = this.activatedRoute.data.subscribe((data) => {
      this.page = data['pagingParams'].page;
      this.previousPage = data['pagingParams'].page;
      this.reverse = data['pagingParams'].ascending;
      this.predicate = data['pagingParams'].predicate;
    });
  }

  ngOnInit() {
    const req = {
      page: this.page - 1,
      size: this.itemsPerPage,
      sort: this.sort()
    };
    this.contentGreenLampService.findByCategory(environment.ONLINE_COURSE, req)
      .subscribe(
        (res: Response) => this.onSuccess(res.json(), res.headers),
        (res: Response) => this.onError(res.json())
      );
    return;
  }

  sort() {
    const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  private onSuccess(data, headers): void {
    this.contents = data;
    this.firstLine = data.slice(0, 3);
    this.secondLine = data.slice(3, 6);
    this.lastLine = data.slice(6, 9);
    this.totalItems = headers.get('X-Total-Count');
    this.links = this.parseLinks.parse(headers.get('Link'));
    this.queryCount = this.totalItems;
  }

  private onError(error): void {
    console.error(error.message, null, null);
  }

}
