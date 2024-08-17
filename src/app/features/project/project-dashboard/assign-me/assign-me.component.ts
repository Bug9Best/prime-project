import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-assign-me',
  standalone: true,
  imports: [ButtonModule, TableModule, TagModule, DividerModule, ChartModule, TooltipModule],
  templateUrl: './assign-me.component.html',
  styleUrl: './assign-me.component.scss'
})
export class AssignMeComponent {
  items: any[] = [
    { name: 'Taskname kiw' },
    { name: 'Taskname kiw' },
    { name: 'Taskname kiw' },
    { name: 'Taskname kiw' },
  ];

  assignMe() {}
  memberItem!: any;
  value: any = [
    {
      id: 1,
      name: 'Do some work',
      roles: 'Phuri siripool',
    },
    {
      id: 2,
      name: 'Do u',
      roles: 'Natthaphon Ditthaviboon',
    },
  ];
}
