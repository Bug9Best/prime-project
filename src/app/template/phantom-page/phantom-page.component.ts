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
export class PhantomPageComponent {

  overlayMenuOpenSubscription: Subscription;
  menuOutsideClickListener: any;

  profileMenuOutsideClickListener: any;

  @ViewChild(PhantomSidebarComponent) appSidebar!: PhantomSidebarComponent;


  constructor(
    public layoutService: PhantomPageService,
    public renderer: Renderer2,
    public router: Router) {
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      if (!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
          const isOutsideClicked = !(this.appSidebar.el.nativeElement.isSameNode(event.target) || this.appSidebar.el.nativeElement.contains(event.target));
          if (isOutsideClicked) {
            this.hideMenu();
          }
        });
      }

      if (this.layoutService.state.staticMenuMobileActive) {
        this.blockBodyScroll();
      }
    });

    // this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    //   .subscribe(() => {
    //     this.hideMenu();
    //     this.hideProfileMenu();
    //   });
  }

  hideMenu() {
    this.layoutService.state.overlayMenuActive = false;
    this.layoutService.state.staticMenuMobileActive = false;
    this.layoutService.state.menuHoverActive = false;
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }

  blockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.add('blocked-scroll');
    }
    else {
      document.body.className += ' blocked-scroll';
    }
  }

  unblockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');
    }
    else {
      document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
        'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
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
      'p-input-filled': this.layoutService.config().inputStyle === 'filled',
      'p-ripple-disabled': !this.layoutService.config().ripple
    }
  }
}
