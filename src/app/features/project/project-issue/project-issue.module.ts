import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { ProjectIssueComponent } from './project-issue.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { TreeTableModule } from 'primeng/treetable';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GanttPrintService } from '@worktile/gantt';
import { GanttConfigProvider } from '../../../config/gantt.config';
import { ThyButton, ThyButtonModule } from 'ngx-tethys/button';
import { ThyLayoutModule } from 'ngx-tethys/layout';

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
    TreeTableModule,
    DividerModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    ThyButton, 
    ThyButtonModule,
    ThyLayoutModule
  ],
  providers: [GanttPrintService, GanttConfigProvider]

})
export class ProjectIssueModule { }
