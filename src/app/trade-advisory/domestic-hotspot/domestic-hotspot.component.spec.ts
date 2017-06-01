import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticHotspotComponent } from './domestic-hotspot.component';

describe('DomesticHotspotComponent', () => {
  let component: DomesticHotspotComponent;
  let fixture: ComponentFixture<DomesticHotspotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticHotspotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticHotspotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
