import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { ProjectBoardComponent } from './project-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhantomTemplateModule } from '../../../template/phantom-template.module';
import { ProjectBoardAdd } from './project-board-add/project-board-add.component';
import { ProjectBoardList } from './project-board-list/project-board-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectBoardComponent
  },
];

@NgModule({
  declarations: [
    ProjectBoardComponent,
    ProjectBoardAdd,
    ProjectBoardList
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    PhantomTemplateModule
  ]
})
export class ProjectBoardModule { }
