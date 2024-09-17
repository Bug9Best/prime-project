import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectSprintComponent } from './project-sprint.component';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PhantomTemplateModule } from '../../../template/phantom-template.module';
import { ProjectSprintCreate } from './project-sprint-create/project-sprint-create.component';
import { ProjectSprintList } from './project-sprint-list/project-sprint-list.component';
import { ProjectSprintDetail } from './project-sprint-detail/project-sprint-detail.component';
import { TabViewModule } from 'primeng/tabview';

const routes: Routes = [
  {
    path: '',
    component: ProjectSprintComponent
  },
];

@NgModule({
  declarations: [
    ProjectSprintComponent,
    ProjectSprintCreate,
    ProjectSprintList,
    ProjectSprintDetail
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    TranslateModule,
    ReactiveFormsModule,
    PhantomTemplateModule,
    TabViewModule
  ]
})
export class ProjectSprintModule { }
