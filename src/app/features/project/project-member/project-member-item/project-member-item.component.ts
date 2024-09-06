import { Component, Input, output, ViewChild } from '@angular/core';
import { ProjectMemberDetailComponent } from '../project-member-detail/project-member-detail.component';

@Component({
  selector: 'project-member-item',
  templateUrl: './project-member-item.component.html',
  styleUrl: './project-member-item.component.scss'
})
export class ProjectMemberItemComponent {

  @Input() member: any;

  @ViewChild(ProjectMemberDetailComponent)
  memberDetail!: ProjectMemberDetailComponent;
  onSelectMember() {
    this.memberDetail.member = this.member;
    this.memberDetail.isShowMember = !this.memberDetail.isShowMember;
  }

}
