import { Component, output } from '@angular/core';
import { PhantomTemplateModule } from "../../../../template/phantom-template.module";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'project-issue-create',
  templateUrl: './project-issue-create.component.html',
  styleUrl: './project-issue-create.component.scss'
})
export class ProjectIssueCreate {
  isOnCreateIssue: boolean = false;
  formGroup: FormGroup = new FormGroup({
    summary: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    sprint: new FormControl('', Validators.required),
    assignee: new FormControl('', Validators.required),
  });
  onAddIssue = output<any>();

  constructor(
  ) { }
  options: any = [
    { label: 'Sprint 1', value: 'Sprint 1' },
    { label: 'Sprint 2', value: 'Sprint 2' },
    { label: 'Sprint 3', value: 'Sprint 3' },
  ];

  optionsAssignee: any = [
    { label: 'Natthaphon Ditthaviboon', value: 'Natthaphon Ditthaviboon' },
  ];

  optionsType: any = [
    { label: 'Task', value: 'Task' },
    { label: 'Bug', value: 'Bug' },
  ];

  optionsStatus: any = [
    { label: 'Todo', value: 'Todo' },
    { label: 'Done', value: 'Done' },
    { label: 'In Progress', value: 'In Progress' },
  ];
  onCloseDialog() {
    this.formGroup.reset();
    this.isOnCreateIssue = false;
  }

  onCreateIssue() {
    this.onCloseDialog();
  }
}
