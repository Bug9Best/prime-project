import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogIssueCreateComponent } from './backlog-issue-create.component';

describe('BacklogIssueCreateComponent', () => {
  let component: BacklogIssueCreateComponent;
  let fixture: ComponentFixture<BacklogIssueCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BacklogIssueCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BacklogIssueCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
