import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectSettingComponent } from './project-setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { ThaiModule } from '../../../shared/pipes/thai.module';
import { PhantomTemplateModule } from '../../../template/phantom-template.module';

const routes: Routes = [
  {
    path: '',
    component: ProjectSettingComponent
  },
];

@NgModule({
  declarations: [
    ProjectSettingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    ThaiModule,
    TranslateModule,
    PhantomTemplateModule
  ]
})
export class ProjectSettingModule { }
