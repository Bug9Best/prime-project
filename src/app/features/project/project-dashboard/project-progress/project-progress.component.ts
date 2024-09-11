import { Component } from '@angular/core';

@Component({
  selector: 'project-progress',
  templateUrl: './project-progress.component.html',
  styleUrl: './project-progress.component.scss',
})
export class ProjectProgress {
  value = [{ label: 'Space used', value: 15, color: '#34d399' }];
}
