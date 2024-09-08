import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDashboardComponent } from './project-dashboard.component';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { TranslateModule } from '@ngx-translate/core';
import { GridsterComponent, GridsterItemComponent } from 'angular-gridster2';
import { PhantomModule } from '../../../template/phantom-module.module';
import { ProjectInfo } from './project-info/project-info.component';
import { ProjectRecentActivity } from './project-recent-activity/project-recent-activity.component';
import { ProjectTeamProgress } from './project-team-progress/project-team-progress.component';
import { ProjectTask } from './project-task/project-task.component';
import { ProjectProgress } from './project-progress/project-progress.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeterGroupModule } from 'primeng/metergroup';


const routes: Routes = [
  {
    path: '',
    component: ProjectDashboardComponent,
  },
];

@NgModule({
  declarations: [
    ProjectDashboardComponent,
    ProjectInfo,
    ProjectTask,
    ProjectProgress,
    ProjectTeamProgress,
    ProjectRecentActivity,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    TranslateModule,
    PhantomModule,
    MeterGroupModule
  ]
})
export class ProjectDashboardModule { }
