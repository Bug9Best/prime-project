import { Component, inject, output, Output, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'project-resource-create',
  templateUrl: './project-resource-create.component.html',
  styleUrl: './project-resource-create.component.scss',
})
export class ProjectResourceCreate {
  visible: boolean = false;

  text = signal<string>('');

  formGroup: FormGroup = new FormGroup({
    topic: new FormControl(null, Validators.required),
    content: new FormControl(null),
  });

  onCloseDialog(visible: boolean) {
    this.visible = visible;
    this.formGroup.reset();
  }

  messageService = inject(MessageService);
  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({
      key: 'app',
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }

  onAddResource = output<any>();
  validateForm(): void {
    if (this.formGroup.invalid) {
      this.formGroup.controls['topic'].markAsDirty();
      this.showMessage('warn', 'Error', 'Please fill in all required fields');
      return;
    }

    let values = this.formGroup.value;
    this.onAddResource.emit(values);
    this.onCloseDialog(false);
  }
}
