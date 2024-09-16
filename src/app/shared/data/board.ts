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
              { id: 1, title: 'Task 1', description: '18 กันยายน 2024' },
              { id: 2, title: 'Task 2', description: '20 กันยายน 2024' }
            ]
          },
          {
            id: 2,
            name: 'In Progress',
            items: [
              { id: 3, title: 'Task 3', description: '21 กันยายน 2024' }
            ]
          },
          {
            id: 3,
            name: 'Done',
            items: [
              { id: 4, title: 'Task 4', description: '16 กันยายน 2024' }
            ]
          }
        ];
      }
    }
  
    saveBoard() {
      localStorage.setItem('kanbanBoard', JSON.stringify(this.board));
    }
  }
  