import { Component, ViewChild } from '@angular/core';
import { ProjectSprintList } from './project-sprint-list/project-sprint-list.component';
import { ProjectSprintDetail } from './project-sprint-detail/project-sprint-detail.component';

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

  @ViewChild(ProjectSprintDetail)
  sprintDetail!: ProjectSprintDetail;
  viewDetail(data: any) {
    if (!data) return;
    console.log(data);
    this.sprintDetail.showDialog(data);
  }
}
