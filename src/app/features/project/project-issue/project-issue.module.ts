import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { ProjectIssueComponent } from './project-issue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhantomTemplateModule } from '../../../template/phantom-template.module';
import { ProjectIssueCreate, } from './project-issue-create/project-issue-create.component';
import { ProjectIssueList } from './project-issue-list/project-issue-list.component';
import { ProjectIssueDetail,} from './project-issue-detail/project-issue-detail.component';
import { TimelineModule } from 'primeng/timeline';
import { DividerModule } from 'primeng/divider';

const routes: Routes = [
  {
    path: '',
    component: ProjectIssueComponent
  },
];

@NgModule({
  declarations: [
    ProjectIssueComponent,
    ProjectIssueCreate,
    ProjectIssueList,
    ProjectIssueDetail
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    PhantomTemplateModule,
    TimelineModule,
    DividerModule,
  ],
})
export class ProjectIssueModule { }
