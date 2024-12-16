import { Component } from '@angular/core';
import { KanbanBoard } from '../../../../shared/data/board';

@Component({
  selector: 'project-board-detail',
  templateUrl: './project-board-detail.component.html',
  styleUrl: './project-board-detail.component.scss'
})
export class ProjectBoardDetail {

  value: string | null = null;
  commentValue: string = '';

  startDate: Date = new Date();
  dueDate: Date = new Date();

  board?: KanbanBoard;
  item: any;
  visible: boolean = false;

  listComment: any[] = [
    {
      value: 'ตรวจดูความถูกต้องอีกรอบ',
      date: new Date(new Date().setDate(new Date().getDate() - 1))
    },
    {
      value: 'ตรวจดูความถูกต้องอีกรอบ',
      date: new Date(new Date().setDate(new Date().getDate() - 1))
    },
    {
      value: 'ตรวจดูความถูกต้องอีกรอบ',
      date: new Date(new Date().setDate(new Date().getDate() - 1))
    },
    {
      value: 'ตรวจดูความถูกต้องอีกรอบ',
      date: new Date(new Date().setDate(new Date().getDate() - 1))
    },
    {
      value: 'ตรวจดูความถูกต้องอีกรอบ',
      date: new Date(new Date().setDate(new Date().getDate() - 1))
    },
  ];

  isEditAssignee: boolean = false;
  isEditStartDate: boolean = false;
  isEditDueDate: boolean = false;
  isEditEstimate: boolean = false;
  isEditActual: boolean = false;

  openDetail(data: any) {
    this.visible = true;
    this.item = data.item;
    this.board = data.board;
    console.log(data);
  }

  addComment() {
    this.listComment.push({
      value: this.commentValue,
      date: new Date()
    });
    this.commentValue = '';
    console.log(this.listComment);
  }
}
