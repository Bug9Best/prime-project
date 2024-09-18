import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'project-sprint-detail',
  templateUrl: './project-sprint-detail.component.html',
  styleUrl: './project-sprint-detail.component.scss',
})
export class ProjectSprintDetail {
  sprintData: any = {};
  visible: boolean = false;

  constructor(
    private confirmationService: ConfirmationService
  ) { }

  showDialog(data: any = {}) {
    this.visible = true;
    this.innitializeData(data);
  }

  innitializeData(data: any = {}) {
    this.sprintData = data;
  }

  onDelete() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this issue?',
      accept: () => {
      }
    });
  }
}
