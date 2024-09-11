import { Component, output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'project-board-add',
  templateUrl: './project-board-add.component.html',
  styleUrl: './project-board-add.component.scss',
})
export class ProjectBoardAdd {
  visible: boolean = false;

  formGroup: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
  });

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
    this.onCreateBoard();
  }

  onCreateEvent = output<any>();
  onCreateBoard() {
    let values = this.formGroup.value;
    this.onCreateEvent.emit(values);
    this.showMessages('success', 'Success', 'Board created successfully');
    this.resetForm();
  }
}
