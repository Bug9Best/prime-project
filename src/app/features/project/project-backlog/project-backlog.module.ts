import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { ProjectBacklogComponent } from './project-backlog.component';
import { BacklogIssueComponent } from './backlog-issue/backlog-issue.component';
import { BacklogIssueCreateComponent } from './backlog-issue-create/backlog-issue-create.component';
import { BacklogSprintComponent } from './backlog-sprint/backlog-sprint.component';
import { BacklogSprintCreateComponent } from './backlog-sprint-create/backlog-sprint-create.component';
import { PickListModule } from 'primeng/picklist';
import { PhantomTemplateModule } from '../../../template/phantom-template.module';



const routes: Routes = [
  {
    path: '',
    component: ProjectBacklogComponent
  },
];

@NgModule({
  declarations: [
    ProjectBacklogComponent,
    BacklogIssueComponent,
    BacklogIssueCreateComponent,
    BacklogSprintComponent,
    BacklogSprintCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    TranslateModule,
    PickListModule,
    PhantomTemplateModule
  ]
})
export class ProjectBacklogModule { }
