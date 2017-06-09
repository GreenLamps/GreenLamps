import { Component, OnInit } from '@angular/core';
import {ContentGreemLampService} from '../entities/content/content-green-lamp.service';

@Component({
  selector: 'app-online-course',
  templateUrl: './online-course.component.html',
  styleUrls: ['./online-course.component.css']
})
export class OnlineCourseComponent implements OnInit {

  constructor(private contentGreenLampService: ContentGreemLampService) { }

  ngOnInit() {
    // this.contentGreenLampService.find();
    console.log(this.contentGreenLampService.find(1));
  }

}