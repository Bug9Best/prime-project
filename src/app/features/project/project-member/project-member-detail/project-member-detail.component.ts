import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'project-member-detail',
  templateUrl: './project-member-detail.component.html',
  styleUrl: './project-member-detail.component.scss'
})
export class ProjectMemberDetail {

  member: any;
  isShowMember: boolean = false;

  constructor(
    private confirmationService: ConfirmationService,
  ) { }

  removeMember(item: any) {
    this.confirmationService.confirm({
      message: 'Do you want to remove this member from project?',
      accept: () => {
        this.isShowMember = false;
      }
    });
  }
}
