import { Component, ViewChild } from '@angular/core';
import { ProjectBoardList } from './project-board-list/project-board-list.component';
import { ProjectBoardDetail } from './project-board-detail/project-board-detail.component';

@Component({
  selector: 'app-project-board',
  templateUrl: './project-board.component.html',
  styleUrl: './project-board.component.scss',
})
export class ProjectBoardComponent {
  
  @ViewChild(ProjectBoardList) 
  boardList!: ProjectBoardList;
  createBoard(data: any) {
    this.boardList.createBoard(data);
  }

  @ViewChild(ProjectBoardDetail) 
  boardDetail!: ProjectBoardDetail;
  onViewDetail(data: any) {
    this.boardDetail.openDetail(data);
  }
}
