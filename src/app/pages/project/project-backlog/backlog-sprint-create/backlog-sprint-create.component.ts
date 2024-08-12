import { Component } from '@angular/core';

@Component({
  selector: 'app-backlog-sprint-create',
  templateUrl: './backlog-sprint-create.component.html',
  styleUrl: './backlog-sprint-create.component.scss'
})
export class BacklogSprintCreateComponent {
  sprint: any;
  visible: boolean = false;

  constructor(
  ) { }

  showDialog() {
    this.visible = true;
  }

  onCreate() {
    let data: any = {
      id: 1,
      sprint_name: "Test Sprint",
      sprint_owner: "Test Owner",
      sprint_duration: "2 weeks",
      sprint_start_date: "2020-01-01",
      sprint_end_date: "2020-01-31",
    }
    this.visible = false;
    localStorage.getItem('sprints');
    if (this.sprint) {
      this.sprint.push(data);
    }
    else {
      console.log('No sprints found');
      this.sprint = [data];
    }
    localStorage.setItem('sprints', JSON.stringify(this.sprint));
    // this.stateService.setStatusRoload(true);
  }
}
