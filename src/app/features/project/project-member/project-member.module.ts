import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectMemberComponent } from './project-member.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectMemberItemComponent } from './project-member-item/project-member-item.component';
import { ProjectMemberDetailComponent } from './project-member-detail/project-member-detail.component';
import { StyleClassModule } from 'primeng/styleclass';
import { PhantomModule } from '../../../template/phantom-module.module';

const routes: Routes = [
  {
    path: '',
    component: ProjectMemberComponent
  },
];

@NgModule({
  declarations: [
    ProjectMemberComponent,
    ProjectMemberItemComponent,
    ProjectMemberDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    TranslateModule,
    StyleClassModule,
    PhantomModule
  ]
})
export class ProjectMemberModule { }
