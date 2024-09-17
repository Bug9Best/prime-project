import { Component } from '@angular/core';

@Component({
  selector: 'project-sprint-detail',
  templateUrl: './project-sprint-detail.component.html',
  styleUrl: './project-sprint-detail.component.scss',
})
export class ProjectSprintDetail {
  sprintData: any = {};
  visible: boolean = false;

  showDialog(data: any = {}) {
    this.visible = true;
    this.innitializeData(data);
  }

  innitializeData(data: any = {}) {
    this.sprintData = data;
  }
}
