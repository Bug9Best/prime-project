import { Component, inject, Renderer2, ViewChild } from '@angular/core';
import { PhantomSidebarComponent } from './phantom-sidebar/phantom-sidebar.component';
import { PhantomTopbarComponent } from './phantom-topbar/phantom-topbar.component';
import { PhantomFooterComponent } from './phantom-footer/phantom-footer.component';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PhantomPageService } from './phantom-page.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'phantom-page',
  standalone: true,
  imports: [
    CommonModule,
    PhantomTopbarComponent,
    PhantomSidebarComponent,
    PhantomFooterComponent,
    RouterOutlet
  ],
  templateUrl: './phantom-page.component.html',
})
export class PhantomPage {

  menuOutsideClickListener: any;

  profileMenuOutsideClickListener: any;

  @ViewChild(PhantomSidebarComponent) appSidebar!: PhantomSidebarComponent;


  constructor(
    public layoutService: PhantomPageService,
    public router: Router) {
  }

  get containerClass() {
    return {
      'layout-theme-light': this.layoutService.config().colorScheme === 'light',
      'layout-theme-dark': this.layoutService.config().colorScheme === 'dark',
      'layout-overlay': this.layoutService.config().menuMode === 'overlay',
      'layout-static': this.layoutService.config().menuMode === 'static',
      'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config().menuMode === 'static',
      'layout-overlay-active': this.layoutService.state.overlayMenuActive,
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
    }
  }
}
