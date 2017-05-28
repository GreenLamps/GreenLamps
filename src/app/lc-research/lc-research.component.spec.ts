import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcResearchComponent } from './lc-research.component';

describe('LcResearchComponent', () => {
  let component: LcResearchComponent;
  let fixture: ComponentFixture<LcResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
