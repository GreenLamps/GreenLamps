import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConventionTrackingComponent } from './convention-tracking.component';

describe('ConventionTrackingComponent', () => {
  let component: ConventionTrackingComponent;
  let fixture: ComponentFixture<ConventionTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConventionTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConventionTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
