import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCourseComponent } from './online-course.component';

describe('OnlineCourseComponent', () => {
  let component: OnlineCourseComponent;
  let fixture: ComponentFixture<OnlineCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
