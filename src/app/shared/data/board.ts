export interface KanbanBoardItem {
    id: number;
    title: string;
    description: string;
  }
  
  export interface KanbanBoard {
    id: number;
    name: string;
    items: KanbanBoardItem[];
  }
  
  export class MockBoard {
    board: KanbanBoard[] = []
  
    constructor() {
      const savedBoard = localStorage.getItem('kanbanBoard');
      if (savedBoard) {
        this.board = JSON.parse(savedBoard);
      } else {
        this.board = [
          {
            id: 1,
            name: 'To Do',
            items: [
              { id: 1, title: 'Task 1', description: 'Description 1' },
              { id: 2, title: 'Task 2', description: 'Description 2' }
            ]
          },
          {
            id: 2,
            name: 'In Progress',
            items: [
              { id: 3, title: 'Task 3', description: 'Description 3' }
            ]
          },
          {
            id: 3,
            name: 'Done',
            items: [
              { id: 4, title: 'Task 4', description: 'Description 4' }
            ]
          }
        ];
      }
    }
  
    saveBoard() {
      localStorage.setItem('kanbanBoard', JSON.stringify(this.board));
    }
  }
  