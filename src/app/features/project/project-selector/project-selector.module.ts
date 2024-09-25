import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { ProjectDashboardComponent } from '../project-dashboard/project-dashboard.component';
import { ProjectSelectorComponent } from './project-selector.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { PhantomTemplateModule } from "../../../template/phantom-template.module";
import { PhantomFooterComponent } from "../../../template/phantom-page/phantom-footer/phantom-footer.component";
import { PhantomTopbarComponent } from '../../../template/phantom-page/phantom-topbar/phantom-topbar.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectSelectorComponent
  }
]

@NgModule({
  declarations: [
    ProjectSelectorComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    RouterModule.forChild(routes),
    TranslateModule,
    InputTextModule,
    PhantomTemplateModule,
    PhantomFooterComponent,
    PhantomTopbarComponent
]
})
export class ProjectSelectorModule { }
