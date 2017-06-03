import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicPaperComponent } from './academic-paper.component';

describe('AcademicPaperComponent', () => {
  let component: AcademicPaperComponent;
  let fixture: ComponentFixture<AcademicPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
