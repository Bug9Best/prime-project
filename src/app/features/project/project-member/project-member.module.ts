import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectMemberComponent } from './project-member.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: ProjectMemberComponent
  },
];

@NgModule({
  declarations: [
    ProjectMemberComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    TranslateModule,
  ]
})
export class ProjectMemberModule { }
