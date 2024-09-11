import { Component, ViewChild } from '@angular/core';
import { NodeService } from '../../../shared/service/nodeservice';
import { ProjectIssueList } from './project-issue-list/project-issue-list.component';

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
}
