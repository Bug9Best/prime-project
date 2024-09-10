import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectSprintComponent } from './project-sprint.component';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { TranslateModule } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';
import { TreeTableModule } from 'primeng/treetable';
import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { ThyButton, ThyButtonModule } from 'ngx-tethys/button';
import { ThyLayoutModule } from 'ngx-tethys/layout';
import { NgxGanttModule } from '@worktile/gantt';
import { PhantomModule } from '../../../template/phantom-module.module';

const routes: Routes = [
  {
    path: '',
    component: ProjectSprintComponent
  },
];

@NgModule({
  declarations: [
    ProjectSprintComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    TranslateModule,
    DividerModule,
    TreeTableModule,
    CheckboxModule,
    TreeTableModule,
    ReactiveFormsModule,
    ThyButtonModule,
    ThyButton,
    ThyLayoutModule,
    NgxGanttModule,
    PhantomModule
  ]
})
export class ProjectSprintModule { }
