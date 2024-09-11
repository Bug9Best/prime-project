import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { KanbanBoard } from '../../../../shared/data/board';

@Component({
  selector: 'project-board-add',
  templateUrl: './project-board-add.component.html',
  styleUrl: './project-board-add.component.scss',
})
export class ProjectBoardAdd {
  isAddBoard: boolean = false;

  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  closeDialog() {
    this.formGroup.reset();
    this.isAddBoard = false;
  }
}
