import { Component } from '@angular/core';
import { listIssue } from '../../../../shared/data/issue';

@Component({
  selector: 'project-issue-detail',
  templateUrl: './project-issue-detail.component.html',
  styleUrl: './project-issue-detail.component.scss'
})
export class ProjectIssueDetail {
  
  issueData :any = listIssue;
  visible: boolean = false;

  showDialog(data:any){
    this.visible = true;
    this.innitializeData(data);
  }

  innitializeData(data: any = {}){
    this.issueData = data;
  }
}

