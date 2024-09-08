import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { ProjectIssueComponent } from './project-issue.component';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PhantomTemplateModule } from '../../../template/phantom-template.module';

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
    TableModule,
    DividerModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,

    PhantomTemplateModule
  ],
})
export class ProjectIssueModule { }
