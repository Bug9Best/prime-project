import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectResourceSelectionComponent } from './project-resource-selection.component';

describe('ProjectResourceSelectionComponent', () => {
  let component: ProjectResourceSelectionComponent;
  let fixture: ComponentFixture<ProjectResourceSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectResourceSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectResourceSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
