import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public imageSources: string[] = [
    '../../../assets/img/lb1.jpg',
    '../../../assets/img/lb2.jpg',
    '../../../assets/img/lb1.jpg',
    '../../../assets/img/lb2.jpg'
  ];

  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 500
  };

  constructor() { }
  ngOnInit() {
  }

}
