import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBoardDetailComponent } from './project-board-detail.component';

describe('ProjectBoardDetailComponent', () => {
  let component: ProjectBoardDetailComponent;
  let fixture: ComponentFixture<ProjectBoardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBoardDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectBoardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
