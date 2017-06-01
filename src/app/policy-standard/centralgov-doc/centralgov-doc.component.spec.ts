import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralgovDocComponent } from './centralgov-doc.component';

describe('CentralgovDocComponent', () => {
  let component: CentralgovDocComponent;
  let fixture: ComponentFixture<CentralgovDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralgovDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralgovDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
