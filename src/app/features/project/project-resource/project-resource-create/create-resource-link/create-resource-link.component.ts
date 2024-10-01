import { Component, output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'create-resource-link',
  templateUrl: './create-resource-link.component.html',
  styleUrl: './create-resource-link.component.scss',
})
export class CreateResourceLinkComponent {
  formGroup: FormGroup = new FormGroup({
    topic: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required),
    url_link: new FormArray([
      new FormGroup({ url_path: new FormControl(null) }),
      new FormGroup({ url_path: new FormControl(null) }),
      new FormGroup({ url_path: new FormControl(null) }),
      new FormGroup({ url_path: new FormControl(null) }),
    ]),
    resource_owner: new FormControl(null),
  });

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  get linkList(): FormArray {
    return this.formGroup.get('url_link') as FormArray;
  }

  resetForm() {
    this.formGroup.reset();
  }

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

  onBackPreviousStepEvent = output<any>();
  onBackPreviousStep() {
    if (this.formGroup.dirty) {
      this.confirmationService.confirm({
        header: 'Confirmation',
        message: 'Are you sure you want to leave this page?',
        acceptLabel: 'Yes',
        rejectLabel: 'No',
        accept: () => {
          this.resetForm();
          this.onBackPreviousStepEvent.emit(true);
        },
      });
      return;
    }
    this.resetForm();
    this.onBackPreviousStepEvent.emit(true);
  }

  onCreateResourceEvent = output<boolean>();
  onCreateResource() {
    let values = this.formGroup.value;
    this.onCreateResourceEvent.emit(values);
  }
}
