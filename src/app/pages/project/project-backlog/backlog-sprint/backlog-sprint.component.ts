import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-backlog-sprint',
  templateUrl: './backlog-sprint.component.html',
  styleUrl: './backlog-sprint.component.scss'
})
export class BacklogSprintComponent {
  @Input()
  listSprint: any[] = [];
}
