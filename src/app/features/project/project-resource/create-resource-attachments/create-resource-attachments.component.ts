import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PrimeNGConfig, MessageService } from 'primeng/api';

@Component({
  selector: 'create-resource-attachments',
  templateUrl: './create-resource-attachments.component.html',
  styleUrl: './create-resource-attachments.component.scss',
})
export class CreateResourceAttachmentsComponent {
  files = [];

  formGroup: FormGroup = new FormGroup({
    topic: new FormControl(null, Validators.required),
    resource_owner: new FormControl(null),
    create_date: new FormControl(null),
  });

  constructor(
    private config: PrimeNGConfig,
    private messageService: MessageService
  ) {}

  choose(event: any, callback: any) {
    callback();
  }

  onRemoveTemplatingFile(
    event: any,
    file: any,
    removeFileCallback: any,
    index: any
  ) {
    removeFileCallback(event, index);
  }

  onClearTemplatingUpload(clear: any) {
    clear();
  }

  onTemplatedUpload() {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
      life: 3000,
    });
  }

  onSelectedFiles(event: any) {
    if (!event.currentFiles) return;
    this.files = event.currentFiles;
  }

  uploadEvent(callback: any) {
    callback();
  }

  formatSize(bytes: any) {
    const k = 1024;
    const dm = 3;
    let sizes = this.config.translation.fileSizeTypes;
    if (bytes === 0) {
      return `0 ${sizes![0]}`;
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return `${formattedSize} ${sizes![i]}`;
  }
}
