import { Component, ViewChild } from '@angular/core';
import { NodeService } from '../../../shared/service/nodeservice';
import { ProjectIssueList } from './project-issue-list/project-issue-list.component';
import { ProjectIssueDetail } from './project-issue-detail/project-issue-detail.component';

@Component({
  selector: 'project-issue',
  templateUrl: './project-issue.component.html',
  styleUrl: './project-issue.component.scss',
  providers: [NodeService],
})
export class ProjectIssueComponent {

  @ViewChild(ProjectIssueList)
  projectIssueList!: ProjectIssueList;
  createIssue(data: any) {
    this.projectIssueList.createIssue(data);
  }

  @ViewChild(ProjectIssueDetail)
  issueDetail!: ProjectIssueDetail;
  viewDetail(data : any) {
    if (!data) return;
   this.issueDetail.showDialog(data);
  }
}
