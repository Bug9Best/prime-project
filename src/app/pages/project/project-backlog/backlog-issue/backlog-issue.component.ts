import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-backlog-issue',
  templateUrl: './backlog-issue.component.html',
  styleUrl: './backlog-issue.component.scss'
})
export class BacklogIssueComponent {

  @Input()
  listIssue: any[] = [];
}
