import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PrimeNGModule } from '../../shared/modules/primeng.module';
import { PhantomPage } from '../../template/phantom-page/phantom-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { HomeNavigateComponent } from './home-navigate/home-navigate.component';
import { SectionDeveloperComponent } from './section-developer/section-developer.component';
import { SectionFeaturesComponent } from './section-features/section-features.component';
import { SectionGetstartedComponent } from './section-getstarted/section-getstarted.component';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import { SignUpDialogComponent } from './sign-up-dialog/sign-up-dialog.component';
import { PhantomFooterHomeComponent } from "../../template/phantom-footer-home/phantom-footer-home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HomeNavigateComponent,
    SectionDeveloperComponent,
    SectionFeaturesComponent,
    SectionGetstartedComponent,
    SignInDialogComponent,
    SignUpDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    PhantomPage,
    TranslateModule,
    PhantomFooterHomeComponent
]
})
export class HomeModule { }
