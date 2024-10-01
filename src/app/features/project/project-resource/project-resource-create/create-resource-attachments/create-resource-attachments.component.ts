import { Component, output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import {
  Storage,
  ref,
  uploadBytesResumable,
  uploadBytes,
} from '@angular/fire/storage';

@Component({
  selector: 'create-resource-attachments',
  templateUrl: './create-resource-attachments.component.html',
  styleUrl: './create-resource-attachments.component.scss',
})
export class CreateResourceAttachmentsComponent {
  selectedFiles = [];
  uploadedFiles: any = [];
  fileSizeLimit = 40 * 1024 * 1024;

  formGroup: FormGroup = new FormGroup({
    topic: new FormControl(null, Validators.required),
    resource_owner: new FormControl(null),
    create_date: new FormControl(null),
  });

  constructor(
    private messageService: MessageService,
    private storage: Storage
  ) {}

  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({
      key: 'app',
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }

  resetForm() {
    this.formGroup.reset();
  }

  onValidateForm() {
    if (this.formGroup.valid) {
      this.onCreateResource();
    } else {
      this.formGroup.markAllAsTouched();
      this.showMessage('error', 'Error', 'Please fill in all required fields');
    }
  }

  choose(callback: any) {
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

  
  onSelectedFiles(event: any) {
    this.selectedFiles = event.currentFiles;
    this.selectedFiles.forEach((file: any) => {
      if (this.isDuplicateFile(file)) {
        return;
      } else {
        this.uploadFile(file);
      }
    });
  }

  isDuplicateFile(file: any): boolean {
    return this.uploadedFiles.some((uploadedFile: any) => uploadedFile.metadata.name === file.name);
  }

  uploadFile(file: any) {
    if (!file) return;
    const storageRef = ref(this.storage, file.name);
    const fileUpload = uploadBytesResumable(storageRef, file);
    fileUpload.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error('Error uploading file:', error);
      },
      () => {
        uploadBytes(storageRef, file).then((snapshot) => {
          this.uploadedFiles.push(snapshot);
          console.log('File uploaded successfully:', snapshot);
          this.messageService.add({
            key: 'app',
            severity: 'success',
            summary: 'Success',
            detail: `${file.name} uploaded successfully!`,
          });
        });
      }
    );
    this.selectedFiles = [];
  }

  onCreateResource() {
    console.log('Create resource');
  }

  onBackPreviousStepEvent = output<any>();
  onBackPreviousStep() {
    this.resetForm();
    this.onBackPreviousStepEvent.emit(true);
  }
}
