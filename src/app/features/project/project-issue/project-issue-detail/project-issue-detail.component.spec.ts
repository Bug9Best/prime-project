import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIssueDetailComponent } from './project-issue-detail.component';

describe('ProjectIssueDetailComponent', () => {
  let component: ProjectIssueDetailComponent;
  let fixture: ComponentFixture<ProjectIssueDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectIssueDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectIssueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
