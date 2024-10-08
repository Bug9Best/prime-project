import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { ProjectSprintComponent } from '../project-sprint/project-sprint.component';
import { PhantomTemplateModule } from '../../../template/phantom-template.module';

const routes: Routes = [
  {
    path: '',
    component: ProjectSprintComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    TranslateModule,
    PhantomTemplateModule
  ]
})
export class ProjectWorkspaceModule { }
