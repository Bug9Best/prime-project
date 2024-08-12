import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { ProjectBacklogComponent } from './project-backlog.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectBacklogComponent
  },
];

@NgModule({
  declarations: [
    ProjectBacklogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    TranslateModule,
  ]
})
export class ProjectBacklogModule { }
