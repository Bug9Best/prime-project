import { Component, output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'project-board-create',
  templateUrl: './project-board-create.component.html',
  styleUrl: './project-board-create.component.scss'
})
export class ProjectBoardCreate {

  visible: boolean = false;
  selectedBoard: any = null;

  formGroup: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
  });

  constructor(
    private messageService: MessageService,
  ) { }

  resetForm() {
    this.formGroup.reset();
    this.visible = false;
  }

  setSelectedBoard(board: any) {
    this.selectedBoard = board;
    console.log('selected board', this.selectedBoard);
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
    this.onCreateBoardItem();
  }

  onCreateTaskEvent = output<any>();
  onCreateBoardItem() {
    let values = this.formGroup.value;
    this.onCreateTaskEvent.emit(values);
    this.showMessages('success', 'Success', 'Board created successfully');
    this.resetForm();
  }

}
