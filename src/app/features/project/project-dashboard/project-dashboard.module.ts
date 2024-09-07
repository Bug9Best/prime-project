import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDashboardComponent } from './project-dashboard.component';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { TranslateModule } from '@ngx-translate/core';
import { GridsterComponent, GridsterItemComponent } from 'angular-gridster2';
import { PhantomModule } from '../../../template/phantom-module.module';
import { ProjectInfo } from './project-info/project-info.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectDashboardComponent,
  },
];

@NgModule({
  declarations: [
    ProjectDashboardComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    TranslateModule,
    GridsterComponent,
    GridsterItemComponent,
    PhantomModule,
    ProjectInfo
  ]
})
export class ProjectDashboardModule { }
