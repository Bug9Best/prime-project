import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-selector',

  templateUrl: './project-selector.component.html',
  styleUrl: './project-selector.component.scss'
})
export class ProjectSelectorComponent {
  template: any = -1;

  constructor(
    private router: Router,
  ) { }

  onCancel() {
    this.router.navigate(['/home']);
  }

  onSelectProject() {
    this.router.navigate(['/project']);
  }
  onCreateMoreProject() {
    this.router.navigate(['/createproject']);
  }


}
