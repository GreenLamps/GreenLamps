import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityCommentComponent } from './authority-comment.component';

describe('AuthorityCommentComponent', () => {
  let component: AuthorityCommentComponent;
  let fixture: ComponentFixture<AuthorityCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorityCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorityCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
