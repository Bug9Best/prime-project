import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectMemberComponent } from './project-member.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectMemberItem } from './project-member-item/project-member-item.component';
import { ProjectMemberDetail } from './project-member-detail/project-member-detail.component';
import { StyleClassModule } from 'primeng/styleclass';
import { PhantomTemplateModule } from '../../../template/phantom-template.module';
import { ProjectMemberInvite } from './project-member-invite/project-member-invite.component';
import { ProjectMemberPosition } from './project-member-position/project-member-position.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectMemberComponent
  },
];

@NgModule({
  declarations: [
    ProjectMemberComponent,
    ProjectMemberItem,
    ProjectMemberDetail,
    ProjectMemberInvite,
    ProjectMemberPosition
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    TranslateModule,
    StyleClassModule,
    PhantomTemplateModule
  ]
})
export class ProjectMemberModule { }
