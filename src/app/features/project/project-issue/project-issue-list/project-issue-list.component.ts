import { Component, output } from '@angular/core';
import { PhantomTableColumn } from '../../../../template/phantom-table/phantom-table.component';
import { listIssue } from '../../../../shared/data/issue';

@Component({
  selector: 'project-issue-list',
  templateUrl: './project-issue-list.component.html',
  styleUrl: './project-issue-list.component.scss',
})
export class ProjectIssueList {

  listIssue: any[] = listIssue;

  columns: PhantomTableColumn[] = [
    {
      type: 'string',
      label: 'Task',
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

  onSelectedItemsEvent = output<any>();
  onSelectedItems(data: any) {
    this.onSelectedItemsEvent.emit(data);
  }
}
