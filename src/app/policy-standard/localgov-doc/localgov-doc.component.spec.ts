import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalgovDocComponent } from './localgov-doc.component';

describe('LocalgovDocComponent', () => {
  let component: LocalgovDocComponent;
  let fixture: ComponentFixture<LocalgovDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalgovDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalgovDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
