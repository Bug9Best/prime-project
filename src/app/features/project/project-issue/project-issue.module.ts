import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { ProjectIssueComponent } from './project-issue.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectIssueComponent
  },
];

@NgModule({
  declarations: [
    ProjectIssueComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    TranslateModule,
  ]
})
export class ProjectIssueModule { }
