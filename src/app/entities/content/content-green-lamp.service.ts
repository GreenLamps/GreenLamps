import { Injectable } from '@angular/core';
import {BaseRequestOptions, Http, Response, URLSearchParams, Headers} from '@angular/http';
import {DateUtils} from 'ng-jhipster'
import {Observable} from 'rxjs/Observable';
import {ContentGreenLamp} from './content-green-lamp.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class ContentGreenLampService {
  resourceApi = 'api';
  resourceContents = 'contents';
  constructor(private http: Http, private dateUtils: DateUtils) { }

  find(id: number): Observable<ContentGreenLamp> {
    return this.http.get(`${environment.baseUrl}/${this.resourceApi}/${this.resourceContents}/${id}`).map((res: Response) => {
      const jsonResponse = res.json();
      jsonResponse.createTime = this.dateUtils
        .convertDateTimeFromServer(jsonResponse.createTime);
      return jsonResponse;
    });
  }

  /**
   * find by category id
   * @param id
   * @param req
   * @returns {Observable<R>}
   */
  findByCategory(id: number, req?: any): Observable<Response> {
    const options = this.createRequestOption(req);
    return this.http.get(`${environment.baseUrl}/${this.resourceApi}/${this.resourceContents}/category/${id}`, options)
      .map((res: Response) => this.convertResponse(res));
  }
  private convertResponse(res: Response): Response {
    console.log(res);
    const jsonResponse = res.json();
    for (let i = 0; i < jsonResponse.length; i++) {
      jsonResponse[i].createTime = this.dateUtils
        .convertDateTimeFromServer(jsonResponse[i].createTime);
    }
    res.json().data = jsonResponse;
    return res;
  }
  private createRequestOption(req?: any): BaseRequestOptions {
    const options: BaseRequestOptions = new BaseRequestOptions();
    if (req) {
      const params: URLSearchParams = new URLSearchParams();
      params.set('page', req.page);
      params.set('size', req.size);
      if (req.sort) {
        params.paramsMap.set('sort', req.sort);
      }
      if (req.query) {
        params.set('query', req.query);
      }

      options.params = params;
    }
    return options;
  }
}
