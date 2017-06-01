import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalHotspotComponent } from './international-hotspot.component';

describe('InternationalHotspotComponent', () => {
  let component: InternationalHotspotComponent;
  let fixture: ComponentFixture<InternationalHotspotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalHotspotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalHotspotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
