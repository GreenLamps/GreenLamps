import { Component, OnInit } from '@angular/core';
import {Params, Router, ActivatedRoute, Data} from '@angular/router';
import {ContentGreenLampService} from '../entities/content/content-green-lamp.service';
import {ContentGreenLamp} from '../entities/content/content-green-lamp.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  content: ContentGreenLamp;
  preId: string;
  nextId: string;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private contentGreenLampService: ContentGreenLampService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.contentGreenLampService.find(params['id'])
          .subscribe(
            (res: Response) => {
              this.content = res.json();
              this.preId = res.headers.get('details_pre');
              this.nextId = res.headers.get('details_next');
            },
            (res: Response) => console.error('error to load detail')
          );
      });
  }

}
