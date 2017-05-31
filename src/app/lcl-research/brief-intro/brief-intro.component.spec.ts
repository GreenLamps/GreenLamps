import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefIntroComponent } from './brief-intro.component';

describe('BriefIntroComponent', () => {
  let component: BriefIntroComponent;
  let fixture: ComponentFixture<BriefIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BriefIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
