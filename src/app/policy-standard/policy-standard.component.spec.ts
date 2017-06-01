import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyStandardComponent } from './policy-standard.component';

describe('PolicyStandardComponent', () => {
  let component: PolicyStandardComponent;
  let fixture: ComponentFixture<PolicyStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
