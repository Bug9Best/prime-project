import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Divider, DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PrimeNGModule } from '../../../shared/modules/primeng.module';
import { PhantomTopbarComponent } from '../../../template/phantom-page/phantom-topbar/phantom-topbar.component';
import { PhantomFooterComponent } from '../../../template/phantom-page/phantom-footer/phantom-footer.component';
import { ProjectCreateComponent } from './project-create.component';
import { PhantomTemplateModule } from "../../../template/phantom-template.module";

const routes: Routes = [
  {
    path: '',
    component: ProjectCreateComponent
  },
];

@NgModule({
  declarations: [ProjectCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DividerModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    PrimeNGModule,
    PhantomTopbarComponent,
    PhantomFooterComponent,
    PhantomTemplateModule
]
})
export class ProjectCreateModule { }
