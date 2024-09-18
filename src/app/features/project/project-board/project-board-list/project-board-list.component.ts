import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  MockBoard,
  KanbanBoard,
  KanbanBoardItem,
} from '../../../../shared/data/board';

@Component({
  selector: 'project-board-list',
  templateUrl: './project-board-list.component.html',
  styleUrl: './project-board-list.component.scss',
})
export class ProjectBoardList {
  private mockBoard = new MockBoard();

  listBoard: KanbanBoard[] = this.mockBoard.board;
  sourceBoard: KanbanBoard | undefined;
  draggedItem: KanbanBoardItem | undefined;

  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  resetValues() {
    this.draggedItem = undefined;
    this.sourceBoard = undefined;
  }

  onDragStart(column: KanbanBoard, item: KanbanBoardItem) {
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
    }
  }

  createBoard(data: any) {
    this.listBoard.push({
      id: this.listBoard.length + 1,
      name: data.name,
      items: [],
    } as KanbanBoard);
  }
}
