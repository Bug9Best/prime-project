import { Component, output, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  MockBoard,
  KanbanBoard,
  KanbanBoardItem,
} from '../../../../shared/data/board';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
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
            this.onHiddenBoard();
          }
        },
        {
          label: 'Delete',
          icon: 'pi pi-trash',
          command: (event) => {
            this.onDeleteBoard();
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

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

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

  onHiddenBoard() {
    this.listBoard.filter((x) => {
      if (x.id === this.selectedBoard?.id) {
        x.isHidden = true;
      }
    });
  }

  onToggleHidden(board: KanbanBoard) {
    this.listBoard.filter((x) => {
      if (x.id === board?.id) {
        x.isHidden = false;
      }
    });
  }

  onDeleteBoard() {
    if (!this.selectedBoard) return
    this.confirmationService.confirm({
      message: 'ต้องการลบบอร์ดนี้ใช่หรือไม่',
      accept: () => {
        this.deleteBoard();
      },
    });
  }

  deleteBoard() {
    this.listBoard = this.listBoard.filter((x) => x.id !== this.selectedBoard?.id);
    this.successMessage();
  }

  successMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Board has been deleted successfully',
    });
  }

  errorMessage() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Board has not been deleted',
    });
  }
}
