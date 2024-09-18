import { Component } from '@angular/core';
import { listIssue } from '../../../../shared/data/issue';
import { PhantomTemplateModule } from '../../../../template/phantom-template.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'project-issue-detail',
  standalone: true,
  imports: [
    CommonModule,
    PhantomTemplateModule
  ],
  templateUrl: './project-issue-detail.component.html',
  styleUrl: './project-issue-detail.component.scss'
})
export class ProjectIssueDetail {

  issueData: any = listIssue;
  visible: boolean = false;

  showDialog(data: any) {
    this.visible = true;
    this.innitializeData(data);
  }

  innitializeData(data: any = {}) {
    this.issueData = data;
  }
}

