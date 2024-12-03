import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBoardCreateComponent } from './project-board-create.component';

describe('ProjectBoardCreateComponent', () => {
  let component: ProjectBoardCreateComponent;
  let fixture: ComponentFixture<ProjectBoardCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBoardCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectBoardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
