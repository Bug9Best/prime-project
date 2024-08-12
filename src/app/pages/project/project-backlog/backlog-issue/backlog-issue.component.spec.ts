import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogIssueComponent } from './backlog-issue.component';

describe('BacklogIssueComponent', () => {
  let component: BacklogIssueComponent;
  let fixture: ComponentFixture<BacklogIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BacklogIssueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BacklogIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
