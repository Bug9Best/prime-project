import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from '../../shared/modules/primeng.module';
import { PhantomFooterHomeComponent } from '../../template/phantom-footer-home/phantom-footer-home.component';
import { PhantomPage } from '../../template/phantom-page/phantom-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    PhantomPage,
    TranslateModule,
    PhantomFooterHomeComponent,
  ]
})
export class ProfileModule { }
