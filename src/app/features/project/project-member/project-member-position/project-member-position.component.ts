import { Component } from '@angular/core';

@Component({
  selector: 'project-member-position',
  templateUrl: './project-member-position.component.html',
  styleUrl: './project-member-position.component.scss'
})
export class ProjectMemberPosition {

  visible: boolean = false;

  positions: any[] = [
    { id: 1, name: 'Developer' },
    { id: 2, name: 'Designer' },
    { id: 3, name: 'Tester' },
  ];
}
