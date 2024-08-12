import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { ProjectGanttComponent } from './project-gantt.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectGanttComponent
  },
];

@NgModule({
  declarations: [
    ProjectGanttComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    TranslateModule,
  ]
})
export class ProjectGanttModule { }
