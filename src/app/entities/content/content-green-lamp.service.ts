import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {DateUtils} from 'ng-jhipster'
import {Observable} from 'rxjs/Observable';
import {ContentGreenLights} from './content-green-lights.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class ContentGreemLampService {
  resourceApi = 'api'
  constructor(private http: Http) { }

  find(id: number): Observable<ContentGreenLights> {
    return this.http.get(`${environment.baseUrl}/${this.resourceApi}/contents/${id}`).map((res: Response) => {
      const jsonResponse = res.json();
      return jsonResponse;
    });
  }
  private convertResponse(res: Response): Response {
    const jsonResponse = res.json();
    res.json().data = jsonResponse;
    return res;
  }
}
