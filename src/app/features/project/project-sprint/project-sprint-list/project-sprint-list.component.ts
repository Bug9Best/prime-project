import { Component } from '@angular/core';
import { PhantomTableColumn } from '../../../../template/phantom-table/phantom-table.component';

@Component({
  selector: 'project-sprint-list',
  templateUrl: './project-sprint-list.component.html',
  styleUrl: './project-sprint-list.component.scss',
})
export class ProjectSprintList {

  listSprint: any[] = [];

  columns: PhantomTableColumn[] = [
    {
      type: 'string',
      label: 'Task/Issue',
      field: 'sprint_name',
      style: {
        width: '30%',
      },
    },
    {
      type: 'string',
      label: 'Sprint Owner',
      field: 'sprint_owner',
      style: {
        width: '25%',
      },
    },
    {
      type: 'string',
      label: 'Sprint Duration',
      field: 'duration',
      style: {
        width: '20%',
      },
    },
    {
      type: 'progress',
      label: 'Progress',
      field: 'process',
      style: {
        width: '25%',
      },
    },
    {
      type: 'string',
      label: 'Note',
      field: 'sprint_note',
      style: {
        width: '30%',
      },
    },
  ];

  createSprint(data: any) {
    this.listSprint.push(data);
  }
}
