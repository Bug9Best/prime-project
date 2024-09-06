import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMemberPositionComponent } from './project-member-position.component';

describe('ProjectMemberPositionComponent', () => {
  let component: ProjectMemberPositionComponent;
  let fixture: ComponentFixture<ProjectMemberPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectMemberPositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectMemberPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
