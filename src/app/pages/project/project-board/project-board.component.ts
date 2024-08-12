import { Component } from '@angular/core';
import { KanbanBoard, KanbanBoardItem, MockBoard } from '../../../shared/modules/data/board';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-board',
  templateUrl: './project-board.component.html',
  styleUrl: './project-board.component.scss'
})
export class ProjectBoardComponent {
  isOnAddBoard = false;
  private mockBoard = new MockBoard();

  listBoard: KanbanBoard[] = this.mockBoard.board;
  sourceBoard: KanbanBoard | undefined;
  draggedItem: KanbanBoardItem | undefined;

  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  resetValues() {
    this.draggedItem = undefined;
    this.sourceBoard = undefined;
  }

  onDragStart(column: KanbanBoard, item: KanbanBoardItem,) {
    this.sourceBoard = column;
    this.draggedItem = item;
  }

  onDragEnd() {
    this.resetValues();
  }

  onDropItem(targetColumn: KanbanBoard) {
    if (this.draggedItem && this.sourceBoard) {
      const index = this.sourceBoard.items.indexOf(this.draggedItem);
      if (index !== -1) {
        this.sourceBoard.items.splice(index, 1);
      }
      targetColumn.items.push(this.draggedItem);
      this.resetValues();

      this.mockBoard.saveBoard();
    }
  }

  closeDialog() {
    this.formGroup.reset();
    this.isOnAddBoard = false;
  }

  onAddBoard() {
    this.listBoard.push({
      id: this.listBoard.length + 1,
      name: this.formGroup.get('name')?.value,
      items: []
    } as KanbanBoard);
    this.closeDialog();
  }
}
