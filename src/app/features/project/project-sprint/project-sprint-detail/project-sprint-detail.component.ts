import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'project-sprint-detail',
  templateUrl: './project-sprint-detail.component.html',
  styleUrl: './project-sprint-detail.component.scss',
})
export class ProjectSprintDetail {
  sprintData: any = {};

  startDate: Date = new Date("2023-12-01");
  endDate: Date = new Date("2023-12-31");
  visible: boolean = false;

  constructor(
    private confirmationService: ConfirmationService
  ) { }

  showDialog(data: any = {}) {
    this.visible = true;
    this.innitializeData(data);
  }

  innitializeData(data: any = {}) {
    this.sprintData = data;
  }

  onDelete() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this issue?',
      accept: () => {
      }
    });
  }

  listTask: any = [
    {
      name: 'Task 1',
      priority: 'High',
      status: 'To Do',
    },
    {
      name: 'Task 2',
      priority: 'Medium',
      status: 'In Progress',
    },
    {
      name: 'Task 3',
      priority: 'Low',
      status: 'In Progress',
    },
    {
      name: 'Task 4',
      priority: 'High',
      status: 'In Progress',
    },
    {
      name: 'Task 5',
      priority: 'Medium',
      status: 'In Progress',
    },
    {
      name: 'Task 6',
      priority: 'Low',
      status: 'In Progress',
    },
    {
      name: 'Task 7',
      priority: 'High',
      status: 'In Progress',
    },
    {
      name: 'Task 8',
      priority: 'Medium',
      status: 'In Progress',
    },
    {
      name: 'Task 9',
      priority: 'Low',
      status: 'In Progress',
    },
    {
      name: 'Task 10',
      priority: 'High',
      status: 'Done',
    },
    {
      name: 'Task 11',
      priority: 'Medium',
      status: 'Done',
    },
    {
      name: 'Task 12',
      priority: 'Low',
      status: 'Done',
    },
  ]

  listColumns: any = [
    {
      type: 'string',
      label: 'Task/Issue',
      field: 'sprint_name',
      style: {
        width: '5%',
      },
    },
    {
      type: 'string',
      label: 'Sprint Owner',
      field: 'sprint_owner',
      style: {
        width: '5%',
      },
    },
    {
      type: 'string',
      label: 'Sprint Duration',
      field: 'duration',
      style: {
        width: '5%',
      },
    },
    {
      type: 'progress',
      label: 'Progress',
      field: 'process',
      style: {
        width: '5%',
      },
    },
    {
      type: 'string',
      label: 'Note',
      field: 'sprint_note',
      style: {
        width: '5%',
      },
    },
  ]

  onChangeTab(event: any) {
    console.log(event);
  }
}
