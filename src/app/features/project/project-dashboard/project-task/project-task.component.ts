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
    { label: 'All Task', value: 'ALL' },
    { label: 'Critical', value: 'CRITICAL' },
    { label: 'Overdue', value: 'OVER' },
  ];
}
