import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnalyzeViewComponent } from './user-analyze-view.component';

describe('UserAnalyzeViewComponent', () => {
  let component: UserAnalyzeViewComponent;
  let fixture: ComponentFixture<UserAnalyzeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAnalyzeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAnalyzeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
