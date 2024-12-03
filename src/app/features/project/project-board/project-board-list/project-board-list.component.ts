import { Component, output, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  MockBoard,
  KanbanBoard,
  KanbanBoardItem,
} from '../../../../shared/data/board';
import { MenuItem } from 'primeng/api';
import { ProjectBoardCreate } from '../project-board-create/project-board-create.component';
import { id } from 'date-fns/locale';

@Component({
  selector: 'project-board-list',
  templateUrl: './project-board-list.component.html',
  styleUrl: './project-board-list.component.scss',
})
export class ProjectBoardList {
  private mockBoard = new MockBoard();

  items: MenuItem[] = [
    {
      items: [
        {
          label: 'Rename',
          icon: 'pi pi-file-edit',
          command: (event) => {
          }
        },
        {
          label: 'Hidden',
          icon: 'pi pi-eye-slash',
          command: (event) => {

          }
        },
        {
          label: 'Delete',
          icon: 'pi pi-trash',
          command: (event) => {

          }
        }
      ]
    }
  ];

  selectedBoard: KanbanBoard | undefined;
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

  onViewDetail = output<any>();
  viewDetail(board: KanbanBoard, item: KanbanBoardItem) {
    this.onViewDetail.emit({ board, item });
  }

  @ViewChild(ProjectBoardCreate)
  boardCreate!: ProjectBoardCreate;
  onOpenCreate(board: any) {
    this.boardCreate.visible = true;
    this.selectedBoard = board;
  }

  onCreateTask(value: any) {
    if (!this.selectedBoard) return
    let values: KanbanBoardItem = {
      id: this.selectedBoard?.items.length + 1,
      title: value.name,
      description: "",
      due_date: "",
    }
    this.selectedBoard.items.push(values);
  }
}
