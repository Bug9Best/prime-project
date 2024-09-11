import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { ProjectResourceComponent } from './project-resource.component';
import { BoardModule } from 'ngx-board';
import { TranslateModule } from '@ngx-translate/core';
import { PhantomTemplateModule } from '../../../template/phantom-template.module';
import { ProjectResourceCreate } from './project-resource-create/project-resource-create.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectResourceComponent
  },
];

@NgModule({
  declarations: [
    ProjectResourceComponent,
    ProjectResourceCreate
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    BoardModule,
    TranslateModule,
    PhantomTemplateModule

  ]
})
export class ProjectResourceModule { }
