import { Component } from '@angular/core';
import { de } from 'date-fns/locale';
import { Board } from 'ngx-board';

@Component({
  selector: 'app-project-resource',
  templateUrl: './project-resource.component.html',
  styleUrl: './project-resource.component.scss'
})
export class ProjectResourceComponent {

  // board: Board<any>[] = [
  //   {
  //     id: 1,
  //     title: 'Board 1',
  //     description: 'Description for board 1',
  //     columns: [],
  //   }
  // ];

  board =
    { id: 1, title: 'My Board', description: 'Description for board 1' }
    ;

  onCardMoved(event: any) {
    console.log('Item dropped:', event);
  }

  onCardClick(event: any) {
    console.log('Item clicked:', event);
  }

  onColumnMoved(event: any) {
    console.log('Column moved:', event);
  }
}
