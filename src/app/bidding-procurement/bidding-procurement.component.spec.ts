import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingProcurementComponent } from './bidding-procurement.component';

describe('BiddingProcurementComponent', () => {
  let component: BiddingProcurementComponent;
  let fixture: ComponentFixture<BiddingProcurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingProcurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
