import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LclResearchComponent } from './lcl-research.component';

describe('LclResearchComponent', () => {
  let component: LclResearchComponent;
  let fixture: ComponentFixture<LclResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LclResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LclResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
