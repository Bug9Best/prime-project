import { Component, Input } from '@angular/core';

@Component({
  selector: 'backlog-sprint',
  templateUrl: './backlog-sprint.component.html',
  styleUrl: './backlog-sprint.component.scss'
})
export class BacklogSprintComponent {
  @Input()
  listSprint: any[] = [];
}
