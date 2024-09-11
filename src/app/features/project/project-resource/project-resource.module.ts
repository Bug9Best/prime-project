import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { ProjectResourceComponent } from './project-resource.component';
import { BoardModule } from 'ngx-board';
import { TranslateModule } from '@ngx-translate/core';
import { PhantomTemplateModule } from '../../../template/phantom-template.module';
import { ProjectResourceCreate } from './project-resource-create/project-resource-create.component';
import { ProjectResourceList } from './project-resource-list/project-resource-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThaiModule } from '../../../shared/pipes/thai.module';

const routes: Routes = [
  {
    path: '',
    component: ProjectResourceComponent
  },
];

@NgModule({
  declarations: [
    ProjectResourceComponent,
    ProjectResourceCreate,
    ProjectResourceList
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    BoardModule,
    ThaiModule,
    TranslateModule,
    PhantomTemplateModule

  ]
})
export class ProjectResourceModule { }
