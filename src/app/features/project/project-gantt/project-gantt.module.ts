import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { ProjectGanttComponent } from './project-gantt.component';
import { GanttPrintService, NgxGanttModule } from '@worktile/gantt';
import { ThyButton, ThyButtonModule } from 'ngx-tethys/button';
import { ThyLayoutModule } from 'ngx-tethys/layout';
import { GanttConfigProvider } from '../../../config/gantt.config';
import { PhantomTemplateModule } from '../../../template/phantom-template.module';

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
    NgxGanttModule,
    ThyButtonModule,
    ThyButton,
    ThyLayoutModule,
    PhantomTemplateModule
  ],
  providers: [GanttPrintService, GanttConfigProvider]

})
export class ProjectGanttModule { }
