import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PrimeNGModule } from '../../shared/modules/primeng.module';
import { PhantomPageComponent } from '../../template/phantom-page/phantom-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    PhantomPageComponent
  ]
})
export class HomeModule { }
