import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'project-member-detail',
  templateUrl: './project-member-detail.component.html',
  styleUrl: './project-member-detail.component.scss'
})
export class ProjectMemberDetailComponent {

  member: any;
  isShowMember: boolean = false;
}
