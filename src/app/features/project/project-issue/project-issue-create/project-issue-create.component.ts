import { Component, output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'project-issue-create',
  templateUrl: './project-issue-create.component.html',
  styleUrl: './project-issue-create.component.scss',
})
export class ProjectIssueCreate {
  visible: boolean = false;

  formGroup: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    type: new FormControl(null, Validators.required),
    sprint: new FormControl(null, Validators.required),
    assignee: new FormControl(null, Validators.required),
  });

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

  constructor(private messageService: MessageService) {}

  resetForm() {
    this.formGroup.reset();
    this.visible = false;
  }

  showMessages(severity: string, summary: string, detail: string) {
    this.messageService.add({
      key: 'app',
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }

  validateForm() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      this.showMessages('warn', 'Error', 'Please fill in the form');
      return;
    }
    this.onCreateIssue();
  }

  onCreateEvent = output<any>();
  onCreateIssue() {
    let values = this.formGroup.value;
    values.id = Math.floor(Math.random() * 1000);
    this.onCreateEvent.emit(values);
    this.showMessages('success', 'Success', 'Sprint created successfully');
    this.resetForm();
  }
}
