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
    ProjectIssueList
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    PhantomTemplateModule
  ],
})
export class ProjectIssueModule { }
