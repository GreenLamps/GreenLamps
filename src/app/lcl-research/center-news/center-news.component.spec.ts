import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterNewsComponent } from './center-news.component';

describe('CenterNewsComponent', () => {
  let component: CenterNewsComponent;
  let fixture: ComponentFixture<CenterNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
