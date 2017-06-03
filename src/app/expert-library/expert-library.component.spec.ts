import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertLibraryComponent } from './expert-library.component';

describe('ExpertLibraryComponent', () => {
  let component: ExpertLibraryComponent;
  let fixture: ComponentFixture<ExpertLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
