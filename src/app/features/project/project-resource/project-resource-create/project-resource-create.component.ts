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
  text = 'Create Resource';

  formGroup: FormGroup = new FormGroup({
    topic: new FormControl(null, Validators.required),
    content: new FormControl(null),
    resource_owner: new FormControl(null),
    create_date: new FormControl(null),
  });

  editResource(data: any) {
    this.visible = true;
    this.formGroup.patchValue(data.data);
  }

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
    values.resource_owner = 'Natthaphon Ditthaviboon';
    values.create_date = new Date();
    this.onAddResource.emit(values);
    this.onCloseDialog(false);
  }
}
