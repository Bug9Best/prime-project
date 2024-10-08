import { Component, Input, ViewChild } from '@angular/core';
import { ProjectMemberDetail } from '../project-member-detail/project-member-detail.component';

@Component({
  selector: 'project-member-item',
  templateUrl: './project-member-item.component.html',
  styleUrl: './project-member-item.component.scss'
})
export class ProjectMemberItem {

  @Input() member: any;

  @ViewChild(ProjectMemberDetail)
  memberDetail!: ProjectMemberDetail;
  onSelectMember() {
    this.memberDetail.member = this.member;
    this.memberDetail.visible = !this.memberDetail.visible;
  }
}
