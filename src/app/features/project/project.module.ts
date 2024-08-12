import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectBacklogComponent } from './project-backlog/project-backlog.component';
import { ProjectBoardComponent } from './project-board/project-board.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { ProjectGanttComponent } from './project-gantt/project-gantt.component';
import { ProjectIssueComponent } from './project-issue/project-issue.component';
import { ProjectMemberComponent } from './project-member/project-member.component';
import { ProjectResourceComponent } from './project-resource/project-resource.component';
import { ProjectSprintComponent } from './project-sprint/project-sprint.component';
import { ProjectWorkspaceComponent } from './project-workspace/project-workspace.component';
import { PrimeNGModule } from '../../shared/modules/primeng.module';
import { TranslateModule } from '@ngx-translate/core';
import { BacklogControlComponent } from './project-backlog/backlog-control/backlog-control.component';
import { BacklogIssueComponent } from './project-backlog/backlog-issue/backlog-issue.component';
import { BacklogIssueCreateComponent } from './project-backlog/backlog-issue-create/backlog-issue-create.component';
import { BacklogSprintComponent } from './project-backlog/backlog-sprint/backlog-sprint.component';
import { BacklogSprintCreateComponent } from './project-backlog/backlog-sprint-create/backlog-sprint-create.component';
import { TreeTable } from 'primeng/treetable';
import { BoardControlComponent } from './project-board/board-control/board-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'backlog',
    component: ProjectBacklogComponent,
  },
  {
    path: 'board',
    component: ProjectBoardComponent,
  },
  {
    path: 'create',
    component: ProjectCreateComponent,
  },
  {
    path: 'dashboard',
    component: ProjectDashboardComponent,
  },
  {
    path: 'gantt',
    component: ProjectGanttComponent
  },
  {
    path: 'issue',
    component: ProjectIssueComponent
  },
  {
    path: 'member',
    component: ProjectMemberComponent
  },
  {
    path: 'resource',
    component: ProjectResourceComponent
  },
  {
    path: 'sprint',
    component: ProjectSprintComponent
  },
  {
    path: 'workspace',
    component: ProjectWorkspaceComponent
  }
];

@NgModule({
  declarations: [
    ProjectBacklogComponent,
    ProjectBoardComponent,
    ProjectCreateComponent,
    ProjectDashboardComponent,
    ProjectGanttComponent,
    ProjectIssueComponent,
    ProjectMemberComponent,
    ProjectResourceComponent,
    ProjectSprintComponent,
    ProjectWorkspaceComponent,
    BacklogControlComponent,
    BacklogIssueComponent,
    BacklogIssueCreateComponent,
    BacklogSprintComponent,
    BacklogSprintCreateComponent,
    BoardControlComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), TranslateModule, PrimeNGModule, FormsModule, ReactiveFormsModule],
})
export class ProjectModule {}
