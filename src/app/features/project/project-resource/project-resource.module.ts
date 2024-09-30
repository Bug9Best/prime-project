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
import { ProjectResourceSelectionComponent } from './project-resource-selection/project-resource-selection.component';
import { CreateResourceContentComponent } from './create-resource-content/create-resource-content.component';
import { CreateResourceLinkComponent } from './create-resource-link/create-resource-link.component';
import { CreateResourceAttachmentsComponent } from './create-resource-attachments/create-resource-attachments.component';

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
    ProjectResourceList,
    ProjectResourceSelectionComponent,
    CreateResourceContentComponent,
    CreateResourceLinkComponent,
    CreateResourceAttachmentsComponent
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
