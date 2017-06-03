import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertViewsComponent } from './expert-views.component';

describe('ExpertViewsComponent', () => {
  let component: ExpertViewsComponent;
  let fixture: ComponentFixture<ExpertViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
