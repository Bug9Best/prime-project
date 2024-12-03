export interface KanbanBoardItem {
  id: number;
  title: string;
  description: string;
  due_date: string;
}

export interface KanbanBoard {
  id: number;
  name: string;
  items: KanbanBoardItem[];
  isHidden?: boolean;
}

export class MockBoard {
  board: KanbanBoard[] = [
    {
      id: 1,
      name: 'To Do',
      items: [
        { id: 1, title: 'Task 1', description: "Description 1", due_date: '18 กันยายน 2024' },
        { id: 2, title: 'Task 2', description: "Description 2", due_date: '20 กันยายน 2024' }
      ]
    },
    {
      id: 2,
      name: 'In Progress',
      items: [
        { id: 3, title: 'Task 3', description: "Description 3", due_date: '21 กันยายน 2024' }
      ]
    },
    {
      id: 3,
      name: 'Done',
      items: [
        { id: 4, title: 'Task 4', description: "Description 4", due_date: '16 กันยายน 2024' }
      ]
    }
  ]
}
