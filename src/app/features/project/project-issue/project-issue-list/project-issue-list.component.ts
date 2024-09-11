import { Component } from '@angular/core';
import { PhantomTableColumn } from '../../../../template/phantom-table/phantom-table.component';

@Component({
  selector: 'project-issue-list',
  templateUrl: './project-issue-list.component.html',
  styleUrl: './project-issue-list.component.scss',
})
export class ProjectIssueList {

  listIssue: any[] = [];

  columns: PhantomTableColumn[] = [
    {
      type: 'string',
      label: 'Task/Issue',
      field: 'title',
      style: {
        width: '40%',
      },
    },
    {
      type: 'string',
      label: 'Type',
      field: 'type',
      style: {
        width: '20%',
      },
    },
    {
      type: 'string',
      label: 'Sprint',
      field: 'sprint',
      style: {
        width: '20%',
      },
    },
    {
      type: 'string',
      label: 'Assignee',
      field: 'assignee',
      style: {
        width: '20%',
      },
    },
  ];

  createIssue(data: any) {
    this.listIssue.push(data);
  }
}
