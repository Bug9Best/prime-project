import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'create-resource-content',
  templateUrl: './create-resource-content.component.html',
  styleUrl: './create-resource-content.component.scss',
})
export class CreateResourceContentComponent {
  formGroup: FormGroup = new FormGroup({
    topic: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required),
    resource_owner: new FormControl(null),
    create_date: new FormControl(null),
  });

  resetForm() {
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

  onValidateForm() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      this.showMessage('warn', 'Error', 'Please fill all required fields');
      return;
    }

    this.onCreateResource();
  }

  onCancelEvent = output<any>();
  onCancel() {
    this.resetForm();
    this.onCancelEvent.emit(false);
  }

  onCreateResourceEvent = output<boolean>();
  onCreateResource() {
    let values = this.formGroup.value;
    this.onCreateResourceEvent.emit(values);
  }
}
