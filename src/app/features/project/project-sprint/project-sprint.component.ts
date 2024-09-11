import { Component, ViewChild } from '@angular/core';
import { ProjectSprintList } from './project-sprint-list/project-sprint-list.component';

@Component({
  selector: 'app-project-sprint',
  templateUrl: './project-sprint.component.html',
  styleUrl: './project-sprint.component.scss',
})
export class ProjectSprintComponent {

  @ViewChild(ProjectSprintList) 
  projectSprintList!: ProjectSprintList;
  createSprint(data: any) {
    this.projectSprintList.createSprint(data);
  }
}
