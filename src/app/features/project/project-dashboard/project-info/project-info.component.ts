import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TooltipModule } from 'primeng/tooltip';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'project-info',
  standalone: true,
  imports: [
    ButtonModule,
    TableModule,
    ChartModule,
    AvatarModule,
    AvatarGroupModule,
    ProgressBarModule,
    TooltipModule,
    DividerModule
  ],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.scss'
})
export class ProjectInfo {

}
