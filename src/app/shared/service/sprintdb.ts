import { Injectable } from '@angular/core';

@Injectable()
export class sprintdb {
  getFileSystemNodesData() {
    return [
      {
        data: {
          id: 1,
          sprint_name: 'First Sprint',
          sprint_owner: 'Natthaphon Ditthaviboon',
          start_date: new Date(),
          end_date: new Date('2024-09-10'),
          progress: 50,
        },
        children: [],
      },
    ];
  }

  getFilesystem() {
    return Promise.resolve(this.getFileSystemNodesData());
  }
}
