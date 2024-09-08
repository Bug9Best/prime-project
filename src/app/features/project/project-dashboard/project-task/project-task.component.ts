import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'project-task',
  templateUrl: './project-task.component.html',
  styleUrl: './project-task.component.scss',
})
export class ProjectTask {
  formGroup: FormGroup = new FormGroup({
    value: new FormControl("ALL"),
  });

  stateOptions: any[] = [
    { label: 'All Task', value: 'ALL'},
    { label: 'Critical', value: 'CRITICAL' },
    { label: 'Overdue', value: 'OVER' },
  ];

  listTask: any[] = [
    {
      id: 1,
      title: 'Task 1',
      status: 'CRITICAL',
      dueDate: '2021-12-31',
    },
    {
      id: 2,
      title: 'Task 2',
      status: 'OVER',
      dueDate: '2021-12-31',
    },
    {
      id: 3,
      title: 'Task 3',
      status: 'NORMAL',
      dueDate: '2021-12-31',
    },
    {
      id: 4,
      title: 'Task 4',
      status: 'NORMAL',
      dueDate: '2021-12-31',
    },
    {
      id: 5,
      title: 'Task 5',
      status: 'NORMAL',
      dueDate: '2021-12-31',
    },
    {
      id: 6,
      title: 'Task 6',
      status: 'NORMAL',
      dueDate: '2021-12-31',
    },
    {
      id: 7,
      title: 'Task 7',
      status: 'NORMAL',
      dueDate: '2021-12-31',
    },
    {
      id: 8,
      title: 'Task 8',
      status: 'NORMAL',
      dueDate: '2021-12-31',
    },
    {
      id: 9,
      title: 'Task 9',
      status: 'NORMAL',
      dueDate: '2021-12-31',
    },
    {
      id: 10,
      title: 'Task 10',
      status: 'NORMAL',
      dueDate: '2021-12-31',
    },
    {
      id: 11,
      title: 'Task 11',
      status: 'NORMAL',
      dueDate: '2021-12-31',
    },
    {
      id: 12,
      title: 'Task 12',
      status: 'NORMAL',
      dueDate: '2021-12-31',
    },
    {
      id: 13,
      title: 'Task 13',
      status: 'NORMAL',
      dueDate: '2021-12-31',
    },
    {
      id: 14,
      title: 'Task 14',
      status: 'NORMAL',
      dueDate: '2021-12-31',
    },
    {
      id: 15,
      title: 'Task 15',
      status: 'NORMAL',
      dueDate: '2021-12-31',
    },
    {
      id: 16,
      title: 'Task 16',
      status: 'NORMAL',
      dueDate: '2021-12-31',
    },
    {
      id: 17,
      title: 'Task 17',
      status: 'NORMAL',
      dueDate: '2021-12-31 ',
    }
  ]
}
