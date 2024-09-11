import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'project-member-detail',
  templateUrl: './project-member-detail.component.html',
  styleUrl: './project-member-detail.component.scss'
})
export class ProjectMemberDetail {

  member: any;
  visible: boolean = false;

  constructor(
    private confirmationService: ConfirmationService,
  ) { }

  removeMember(item: any) {
    this.confirmationService.confirm({
      message: 'Do you want to remove this member from project?',
      rejectButtonStyleClass: 'p-button-text p-button-danger p-button-sm',
      acceptButtonStyleClass: 'p-button-sm',
      accept: () => {
        this.visible = false;
      }
    });
  }
}
