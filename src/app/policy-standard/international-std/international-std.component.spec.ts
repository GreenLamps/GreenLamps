import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalStdComponent } from './international-std.component';

describe('InternationalStdComponent', () => {
  let component: InternationalStdComponent;
  let fixture: ComponentFixture<InternationalStdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalStdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
