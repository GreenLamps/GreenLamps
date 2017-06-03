import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfBookComponent } from './prof-book.component';

describe('ProfBookComponent', () => {
  let component: ProfBookComponent;
  let fixture: ComponentFixture<ProfBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
