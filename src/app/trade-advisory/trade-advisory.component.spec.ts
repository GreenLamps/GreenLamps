import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeAdvisoryComponent } from './trade-advisory.component';

describe('TradeAdvisoryComponent', () => {
  let component: TradeAdvisoryComponent;
  let fixture: ComponentFixture<TradeAdvisoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeAdvisoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeAdvisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
