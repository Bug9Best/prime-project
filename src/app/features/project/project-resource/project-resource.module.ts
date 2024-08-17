import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { ProjectResourceComponent } from './project-resource.component';
import { BoardModule } from 'ngx-board';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: ProjectResourceComponent
  },
];

@NgModule({
  declarations: [
    ProjectResourceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    BoardModule,
    TranslateModule

  ]
})
export class ProjectResourceModule { }
