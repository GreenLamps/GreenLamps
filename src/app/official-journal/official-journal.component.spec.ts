import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialJournalComponent } from './official-journal.component';

describe('OfficialJournalComponent', () => {
  let component: OfficialJournalComponent;
  let fixture: ComponentFixture<OfficialJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficialJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
